import {
  getRouteToDestination,
  getWalletInfo,
  probeForRoute,
} from 'ln-service';
import { ContextType } from 'server/types/apiTypes';
import { logger } from 'server/helpers/logger';
import { requestLimiter } from 'server/helpers/rateLimiter';
import { getLnd } from 'server/helpers/helpers';
import { toWithError, to } from 'server/helpers/async';

export const routeResolvers = {
  Query: {
    getRoutes: async (_: undefined, params: any, context: ContextType) => {
      await requestLimiter(context.ip, 'getRoutes');

      const lnd = getLnd(params.auth, context);

      const { public_key } = await getWalletInfo({ lnd });

      const { route } = await to(
        getRouteToDestination({
          lnd,
          outgoing_channel: params.outgoing,
          incoming_peer: params.incoming,
          destination: public_key,
          tokens: params.tokens,
          ...(params.maxFee && { max_fee: params.maxFee }),
        })
      );

      if (!route) {
        throw new Error('NoRouteFound');
      }

      return route;
    },
  },
  ProbeRoute: {
    route: async parent => {
      const { lnd, destination, tokens } = parent;

      if (!lnd) {
        logger.debug('ExpectedLNDToProbeForRoute');
        return null;
      }

      if (!destination) {
        logger.debug('ExpectedDestinationToProbeForRoute');
        return null;
      }

      const [info, error] = await toWithError(
        probeForRoute({ lnd, destination, tokens })
      );

      if (!info || error) {
        logger.debug(
          `Error probing route to destination ${destination} for ${tokens} tokens`
        );
        return null;
      }

      if (!info.route) {
        logger.debug(
          `No route found to destination ${destination} for ${tokens} tokens`
        );
        return null;
      }

      const hopsWithNodes = info.route.hops.map(h => ({
        ...h,
        node: { lnd, publicKey: h.public_key },
      }));

      return { ...info.route, hops: hopsWithNodes };
    },
  },
};
