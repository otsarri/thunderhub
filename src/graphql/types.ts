export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type AuthType = {
  type: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  macaroon?: Maybe<Scalars['String']>;
  cert?: Maybe<Scalars['String']>;
};

export type PermissionsType = {
  is_ok_to_adjust_peers?: Maybe<Scalars['Boolean']>;
  is_ok_to_create_chain_addresses?: Maybe<Scalars['Boolean']>;
  is_ok_to_create_invoices?: Maybe<Scalars['Boolean']>;
  is_ok_to_create_macaroons?: Maybe<Scalars['Boolean']>;
  is_ok_to_derive_keys?: Maybe<Scalars['Boolean']>;
  is_ok_to_get_chain_transactions?: Maybe<Scalars['Boolean']>;
  is_ok_to_get_invoices?: Maybe<Scalars['Boolean']>;
  is_ok_to_get_wallet_info?: Maybe<Scalars['Boolean']>;
  is_ok_to_get_payments?: Maybe<Scalars['Boolean']>;
  is_ok_to_get_peers?: Maybe<Scalars['Boolean']>;
  is_ok_to_pay?: Maybe<Scalars['Boolean']>;
  is_ok_to_send_to_chain_addresses?: Maybe<Scalars['Boolean']>;
  is_ok_to_sign_bytes?: Maybe<Scalars['Boolean']>;
  is_ok_to_sign_messages?: Maybe<Scalars['Boolean']>;
  is_ok_to_stop_daemon?: Maybe<Scalars['Boolean']>;
  is_ok_to_verify_bytes_signatures?: Maybe<Scalars['Boolean']>;
  is_ok_to_verify_messages?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  getBaseNodes: Array<Maybe<BaseNodesType>>;
  getAccountingReport: Scalars['String'];
  getVolumeHealth?: Maybe<ChannelsHealth>;
  getTimeHealth?: Maybe<ChannelsTimeHealth>;
  getFeeHealth?: Maybe<ChannelsFeeHealth>;
  getChannelBalance?: Maybe<ChannelBalanceType>;
  getChannels?: Maybe<Array<Maybe<ChannelType>>>;
  getClosedChannels?: Maybe<Array<Maybe<ClosedChannelType>>>;
  getPendingChannels?: Maybe<Array<Maybe<PendingChannelType>>>;
  getChannelFees?: Maybe<Array<Maybe<ChannelFeeType>>>;
  getChannelReport?: Maybe<ChannelReportType>;
  getNetworkInfo?: Maybe<NetworkInfoType>;
  getNodeInfo?: Maybe<NodeInfoType>;
  adminCheck?: Maybe<Scalars['Boolean']>;
  getNode: Node;
  decodeRequest?: Maybe<DecodeType>;
  getWalletInfo?: Maybe<WalletInfoType>;
  getResume?: Maybe<GetResumeType>;
  getForwards?: Maybe<GetForwardType>;
  getBitcoinPrice?: Maybe<Scalars['String']>;
  getBitcoinFees?: Maybe<BitcoinFeeType>;
  getForwardReport?: Maybe<Scalars['String']>;
  getForwardChannelsReport?: Maybe<Scalars['String']>;
  getInOut?: Maybe<InOutType>;
  getBackups?: Maybe<Scalars['String']>;
  verifyBackups?: Maybe<Scalars['Boolean']>;
  recoverFunds?: Maybe<Scalars['Boolean']>;
  getRoutes?: Maybe<GetRouteType>;
  getPeers?: Maybe<Array<Maybe<PeerType>>>;
  signMessage?: Maybe<Scalars['String']>;
  verifyMessage?: Maybe<Scalars['String']>;
  getChainBalance?: Maybe<Scalars['Int']>;
  getPendingChainBalance?: Maybe<Scalars['Int']>;
  getChainTransactions?: Maybe<Array<Maybe<GetTransactionsType>>>;
  getUtxos?: Maybe<Array<Maybe<GetUtxosType>>>;
  getOffers?: Maybe<Array<Maybe<HodlOfferType>>>;
  getCountries?: Maybe<Array<Maybe<HodlCountryType>>>;
  getCurrencies?: Maybe<Array<Maybe<HodlCurrencyType>>>;
  getMessages?: Maybe<GetMessagesType>;
  getAuthToken?: Maybe<Scalars['Boolean']>;
  getSessionToken?: Maybe<Scalars['Boolean']>;
  getServerAccounts?: Maybe<Array<Maybe<ServerAccountType>>>;
  getLnPayInfo?: Maybe<LnPayInfoType>;
  getLnPay?: Maybe<Scalars['String']>;
  getLatestVersion?: Maybe<Scalars['String']>;
};

export type QueryGetAccountingReportArgs = {
  auth: AuthType;
  category?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  fiat?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type QueryGetVolumeHealthArgs = {
  auth: AuthType;
};

export type QueryGetTimeHealthArgs = {
  auth: AuthType;
};

export type QueryGetFeeHealthArgs = {
  auth: AuthType;
};

export type QueryGetChannelBalanceArgs = {
  auth: AuthType;
};

export type QueryGetChannelsArgs = {
  auth: AuthType;
  active?: Maybe<Scalars['Boolean']>;
};

export type QueryGetClosedChannelsArgs = {
  auth: AuthType;
  type?: Maybe<Scalars['String']>;
};

export type QueryGetPendingChannelsArgs = {
  auth: AuthType;
};

export type QueryGetChannelFeesArgs = {
  auth: AuthType;
};

export type QueryGetChannelReportArgs = {
  auth: AuthType;
};

export type QueryGetNetworkInfoArgs = {
  auth: AuthType;
};

export type QueryGetNodeInfoArgs = {
  auth: AuthType;
};

export type QueryAdminCheckArgs = {
  auth: AuthType;
};

export type QueryGetNodeArgs = {
  auth: AuthType;
  publicKey: Scalars['String'];
  withoutChannels?: Maybe<Scalars['Boolean']>;
};

export type QueryDecodeRequestArgs = {
  auth: AuthType;
  request: Scalars['String'];
};

export type QueryGetWalletInfoArgs = {
  auth: AuthType;
};

export type QueryGetResumeArgs = {
  auth: AuthType;
  token?: Maybe<Scalars['String']>;
};

export type QueryGetForwardsArgs = {
  auth: AuthType;
  time?: Maybe<Scalars['String']>;
};

export type QueryGetBitcoinPriceArgs = {
  logger?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
};

export type QueryGetBitcoinFeesArgs = {
  logger?: Maybe<Scalars['Boolean']>;
};

export type QueryGetForwardReportArgs = {
  auth: AuthType;
  time?: Maybe<Scalars['String']>;
};

export type QueryGetForwardChannelsReportArgs = {
  auth: AuthType;
  time?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type QueryGetInOutArgs = {
  auth: AuthType;
  time?: Maybe<Scalars['String']>;
};

export type QueryGetBackupsArgs = {
  auth: AuthType;
};

export type QueryVerifyBackupsArgs = {
  auth: AuthType;
  backup: Scalars['String'];
};

export type QueryRecoverFundsArgs = {
  auth: AuthType;
  backup: Scalars['String'];
};

export type QueryGetRoutesArgs = {
  auth: AuthType;
  outgoing: Scalars['String'];
  incoming: Scalars['String'];
  tokens: Scalars['Int'];
  maxFee?: Maybe<Scalars['Int']>;
};

export type QueryGetPeersArgs = {
  auth: AuthType;
};

export type QuerySignMessageArgs = {
  auth: AuthType;
  message: Scalars['String'];
};

export type QueryVerifyMessageArgs = {
  auth: AuthType;
  message: Scalars['String'];
  signature: Scalars['String'];
};

export type QueryGetChainBalanceArgs = {
  auth: AuthType;
};

export type QueryGetPendingChainBalanceArgs = {
  auth: AuthType;
};

export type QueryGetChainTransactionsArgs = {
  auth: AuthType;
};

export type QueryGetUtxosArgs = {
  auth: AuthType;
};

export type QueryGetOffersArgs = {
  filter?: Maybe<Scalars['String']>;
};

export type QueryGetMessagesArgs = {
  auth: AuthType;
  token?: Maybe<Scalars['String']>;
  initialize?: Maybe<Scalars['Boolean']>;
  lastMessage?: Maybe<Scalars['String']>;
};

export type QueryGetAuthTokenArgs = {
  cookie?: Maybe<Scalars['String']>;
};

export type QueryGetSessionTokenArgs = {
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type QueryGetLnPayArgs = {
  amount?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  closeChannel?: Maybe<CloseChannelType>;
  openChannel?: Maybe<OpenChannelType>;
  updateFees?: Maybe<Scalars['Boolean']>;
  keysend?: Maybe<PayType>;
  createInvoice?: Maybe<NewInvoiceType>;
  circularRebalance?: Maybe<Scalars['Boolean']>;
  bosRebalance?: Maybe<BosRebalanceResultType>;
  payViaRoute?: Maybe<Scalars['Boolean']>;
  createAddress?: Maybe<Scalars['String']>;
  sendToAddress?: Maybe<SendToType>;
  addPeer?: Maybe<Scalars['Boolean']>;
  removePeer?: Maybe<Scalars['Boolean']>;
  sendMessage?: Maybe<Scalars['Int']>;
  logout?: Maybe<Scalars['Boolean']>;
  createMacaroon?: Maybe<Scalars['String']>;
};

export type MutationCloseChannelArgs = {
  auth: AuthType;
  id: Scalars['String'];
  forceClose?: Maybe<Scalars['Boolean']>;
  targetConfirmations?: Maybe<Scalars['Int']>;
  tokensPerVByte?: Maybe<Scalars['Int']>;
};

export type MutationOpenChannelArgs = {
  auth: AuthType;
  amount: Scalars['Int'];
  partnerPublicKey: Scalars['String'];
  tokensPerVByte?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateFeesArgs = {
  auth: AuthType;
  transaction_id?: Maybe<Scalars['String']>;
  transaction_vout?: Maybe<Scalars['Int']>;
  base_fee_tokens?: Maybe<Scalars['Float']>;
  fee_rate?: Maybe<Scalars['Int']>;
  cltv_delta?: Maybe<Scalars['Int']>;
  max_htlc_mtokens?: Maybe<Scalars['String']>;
  min_htlc_mtokens?: Maybe<Scalars['String']>;
};

export type MutationKeysendArgs = {
  auth: AuthType;
  destination: Scalars['String'];
  tokens: Scalars['Int'];
};

export type MutationCreateInvoiceArgs = {
  auth: AuthType;
  amount: Scalars['Int'];
};

export type MutationCircularRebalanceArgs = {
  auth: AuthType;
  route: Scalars['String'];
};

export type MutationBosRebalanceArgs = {
  auth: AuthType;
  avoid?: Maybe<Array<Maybe<Scalars['String']>>>;
  in_through?: Maybe<Scalars['String']>;
  is_avoiding_high_inbound?: Maybe<Scalars['Boolean']>;
  max_fee?: Maybe<Scalars['Int']>;
  max_fee_rate?: Maybe<Scalars['Int']>;
  max_rebalance?: Maybe<Scalars['Int']>;
  node?: Maybe<Scalars['String']>;
  out_channels?: Maybe<Array<Maybe<Scalars['String']>>>;
  out_through?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['Int']>;
};

export type MutationPayViaRouteArgs = {
  auth: AuthType;
  route: Scalars['String'];
  id: Scalars['String'];
};

export type MutationCreateAddressArgs = {
  auth: AuthType;
  nested?: Maybe<Scalars['Boolean']>;
};

export type MutationSendToAddressArgs = {
  auth: AuthType;
  address: Scalars['String'];
  tokens?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['Int']>;
  sendAll?: Maybe<Scalars['Boolean']>;
};

export type MutationAddPeerArgs = {
  auth: AuthType;
  url?: Maybe<Scalars['String']>;
  publicKey?: Maybe<Scalars['String']>;
  socket?: Maybe<Scalars['String']>;
  isTemporary?: Maybe<Scalars['Boolean']>;
};

export type MutationRemovePeerArgs = {
  auth: AuthType;
  publicKey: Scalars['String'];
};

export type MutationSendMessageArgs = {
  auth: AuthType;
  publicKey: Scalars['String'];
  message: Scalars['String'];
  messageType?: Maybe<Scalars['String']>;
  tokens?: Maybe<Scalars['Int']>;
  maxFee?: Maybe<Scalars['Int']>;
};

export type MutationLogoutArgs = {
  type: Scalars['String'];
};

export type MutationCreateMacaroonArgs = {
  auth: AuthType;
  permissions: PermissionsType;
};

export type NodeType = {
  __typename?: 'nodeType';
  alias: Scalars['String'];
  capacity?: Maybe<Scalars['String']>;
  channel_count?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  public_key?: Maybe<Scalars['String']>;
};

export type Node = {
  __typename?: 'Node';
  node?: Maybe<NodeType>;
};

export type NodeInfoType = {
  __typename?: 'nodeInfoType';
  chains?: Maybe<Array<Maybe<Scalars['String']>>>;
  color?: Maybe<Scalars['String']>;
  active_channels_count?: Maybe<Scalars['Int']>;
  closed_channels_count?: Maybe<Scalars['Int']>;
  alias?: Maybe<Scalars['String']>;
  current_block_hash?: Maybe<Scalars['String']>;
  current_block_height?: Maybe<Scalars['Int']>;
  is_synced_to_chain?: Maybe<Scalars['Boolean']>;
  is_synced_to_graph?: Maybe<Scalars['Boolean']>;
  latest_block_at?: Maybe<Scalars['String']>;
  peers_count?: Maybe<Scalars['Int']>;
  pending_channels_count?: Maybe<Scalars['Int']>;
  public_key?: Maybe<Scalars['String']>;
  uris?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type ServerAccountType = {
  __typename?: 'serverAccountType';
  name: Scalars['String'];
  id: Scalars['String'];
  type: Scalars['String'];
  loggedIn: Scalars['Boolean'];
};

export type HodlCountryType = {
  __typename?: 'hodlCountryType';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  native_name?: Maybe<Scalars['String']>;
  currency_code?: Maybe<Scalars['String']>;
  currency_name?: Maybe<Scalars['String']>;
};

export type HodlCurrencyType = {
  __typename?: 'hodlCurrencyType';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type HodlOfferFeeType = {
  __typename?: 'hodlOfferFeeType';
  author_fee_rate?: Maybe<Scalars['String']>;
};

export type HodlOfferPaymentType = {
  __typename?: 'hodlOfferPaymentType';
  id?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  payment_method_id?: Maybe<Scalars['String']>;
  payment_method_type?: Maybe<Scalars['String']>;
  payment_method_name?: Maybe<Scalars['String']>;
};

export type HodlOfferTraderType = {
  __typename?: 'hodlOfferTraderType';
  login?: Maybe<Scalars['String']>;
  online_status?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  trades_count?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  verified_by?: Maybe<Scalars['String']>;
  strong_hodler?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  average_payment_time_minutes?: Maybe<Scalars['Int']>;
  average_release_time_minutes?: Maybe<Scalars['Int']>;
  days_since_last_trade?: Maybe<Scalars['Int']>;
};

export type HodlOfferType = {
  __typename?: 'hodlOfferType';
  id?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  asset_code?: Maybe<Scalars['String']>;
  searchable?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  working_now?: Maybe<Scalars['Boolean']>;
  side?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  currency_code?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  min_amount?: Maybe<Scalars['String']>;
  max_amount?: Maybe<Scalars['String']>;
  first_trade_limit?: Maybe<Scalars['String']>;
  fee?: Maybe<HodlOfferFeeType>;
  balance?: Maybe<Scalars['String']>;
  payment_window_minutes?: Maybe<Scalars['Int']>;
  confirmations?: Maybe<Scalars['Int']>;
  payment_method_instructions?: Maybe<Array<Maybe<HodlOfferPaymentType>>>;
  trader?: Maybe<HodlOfferTraderType>;
};

export type LnPayInfoType = {
  __typename?: 'lnPayInfoType';
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export type BitcoinFeeType = {
  __typename?: 'bitcoinFeeType';
  fast?: Maybe<Scalars['Int']>;
  halfHour?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
};

export type PeerType = {
  __typename?: 'peerType';
  bytes_received?: Maybe<Scalars['Int']>;
  bytes_sent?: Maybe<Scalars['Int']>;
  is_inbound?: Maybe<Scalars['Boolean']>;
  is_sync_peer?: Maybe<Scalars['Boolean']>;
  ping_time?: Maybe<Scalars['Int']>;
  public_key?: Maybe<Scalars['String']>;
  socket?: Maybe<Scalars['String']>;
  tokens_received?: Maybe<Scalars['Int']>;
  tokens_sent?: Maybe<Scalars['Int']>;
  partner_node_info?: Maybe<Node>;
};

export type GetUtxosType = {
  __typename?: 'getUtxosType';
  address?: Maybe<Scalars['String']>;
  address_format?: Maybe<Scalars['String']>;
  confirmation_count?: Maybe<Scalars['Int']>;
  output_script?: Maybe<Scalars['String']>;
  tokens?: Maybe<Scalars['Int']>;
  transaction_id?: Maybe<Scalars['String']>;
  transaction_vout?: Maybe<Scalars['Int']>;
};

export type SendToType = {
  __typename?: 'sendToType';
  confirmationCount?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
  isOutgoing?: Maybe<Scalars['Boolean']>;
  tokens?: Maybe<Scalars['Int']>;
};

export type GetTransactionsType = {
  __typename?: 'getTransactionsType';
  block_id?: Maybe<Scalars['String']>;
  confirmation_count?: Maybe<Scalars['Int']>;
  confirmation_height?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  output_addresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  tokens?: Maybe<Scalars['Int']>;
};

export type GetMessagesType = {
  __typename?: 'getMessagesType';
  token?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<MessagesType>>>;
};

export type MessagesType = {
  __typename?: 'messagesType';
  date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  tokens?: Maybe<Scalars['Int']>;
};

export type InOutType = {
  __typename?: 'InOutType';
  invoices?: Maybe<Scalars['String']>;
  payments?: Maybe<Scalars['String']>;
  confirmedInvoices?: Maybe<Scalars['Int']>;
  unConfirmedInvoices?: Maybe<Scalars['Int']>;
};

export type PolicyType = {
  __typename?: 'policyType';
  base_fee_mtokens?: Maybe<Scalars['String']>;
  cltv_delta?: Maybe<Scalars['Int']>;
  fee_rate?: Maybe<Scalars['Int']>;
  is_disabled?: Maybe<Scalars['Boolean']>;
  max_htlc_mtokens?: Maybe<Scalars['String']>;
  min_htlc_mtokens?: Maybe<Scalars['String']>;
  public_key: Scalars['String'];
  updated_at?: Maybe<Scalars['String']>;
};

export type NodePolicyType = {
  __typename?: 'nodePolicyType';
  base_fee_mtokens?: Maybe<Scalars['String']>;
  cltv_delta?: Maybe<Scalars['Int']>;
  fee_rate?: Maybe<Scalars['Int']>;
  is_disabled?: Maybe<Scalars['Boolean']>;
  max_htlc_mtokens?: Maybe<Scalars['String']>;
  min_htlc_mtokens?: Maybe<Scalars['String']>;
  public_key: Scalars['String'];
  updated_at?: Maybe<Scalars['String']>;
  node?: Maybe<Node>;
};

export type SingleChannelType = {
  __typename?: 'singleChannelType';
  capacity: Scalars['Int'];
  id: Scalars['String'];
  policies: Array<PolicyType>;
  transaction_id: Scalars['String'];
  transaction_vout: Scalars['Int'];
  updated_at?: Maybe<Scalars['String']>;
  node_policies?: Maybe<NodePolicyType>;
  partner_node_policies?: Maybe<NodePolicyType>;
};

export type Channel = {
  __typename?: 'Channel';
  channel?: Maybe<SingleChannelType>;
};

export type ChannelFeeType = {
  __typename?: 'channelFeeType';
  id: Scalars['String'];
  partner_public_key: Scalars['String'];
  partner_node_info: Node;
  channelInfo?: Maybe<Channel>;
};

export type ChannelReportType = {
  __typename?: 'channelReportType';
  local?: Maybe<Scalars['Int']>;
  remote?: Maybe<Scalars['Int']>;
  maxIn?: Maybe<Scalars['Int']>;
  maxOut?: Maybe<Scalars['Int']>;
  commit?: Maybe<Scalars['Int']>;
};

export type ChannelBalanceType = {
  __typename?: 'channelBalanceType';
  confirmedBalance?: Maybe<Scalars['Int']>;
  pendingBalance?: Maybe<Scalars['Int']>;
};

export type ChannelType = {
  __typename?: 'channelType';
  capacity?: Maybe<Scalars['Int']>;
  commit_transaction_fee?: Maybe<Scalars['Int']>;
  commit_transaction_weight?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  is_closing?: Maybe<Scalars['Boolean']>;
  is_opening?: Maybe<Scalars['Boolean']>;
  is_partner_initiated?: Maybe<Scalars['Boolean']>;
  is_private?: Maybe<Scalars['Boolean']>;
  is_static_remote_key?: Maybe<Scalars['Boolean']>;
  local_balance?: Maybe<Scalars['Int']>;
  local_reserve?: Maybe<Scalars['Int']>;
  partner_public_key?: Maybe<Scalars['String']>;
  received?: Maybe<Scalars['Int']>;
  remote_balance?: Maybe<Scalars['Int']>;
  remote_reserve?: Maybe<Scalars['Int']>;
  sent?: Maybe<Scalars['Int']>;
  time_offline?: Maybe<Scalars['Int']>;
  time_online?: Maybe<Scalars['Int']>;
  transaction_id?: Maybe<Scalars['String']>;
  transaction_vout?: Maybe<Scalars['Int']>;
  unsettled_balance?: Maybe<Scalars['Int']>;
  partner_node_info?: Maybe<Node>;
  partner_fee_info?: Maybe<Channel>;
  channel_age?: Maybe<Scalars['Int']>;
};

export type CloseChannelType = {
  __typename?: 'closeChannelType';
  transactionId?: Maybe<Scalars['String']>;
  transactionOutputIndex?: Maybe<Scalars['String']>;
};

export type ClosedChannelType = {
  __typename?: 'closedChannelType';
  capacity?: Maybe<Scalars['Int']>;
  close_confirm_height?: Maybe<Scalars['Int']>;
  close_transaction_id?: Maybe<Scalars['String']>;
  final_local_balance?: Maybe<Scalars['Int']>;
  final_time_locked_balance?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  is_breach_close?: Maybe<Scalars['Boolean']>;
  is_cooperative_close?: Maybe<Scalars['Boolean']>;
  is_funding_cancel?: Maybe<Scalars['Boolean']>;
  is_local_force_close?: Maybe<Scalars['Boolean']>;
  is_remote_force_close?: Maybe<Scalars['Boolean']>;
  partner_public_key?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
  transaction_vout?: Maybe<Scalars['Int']>;
  partner_node_info?: Maybe<Node>;
};

export type OpenChannelType = {
  __typename?: 'openChannelType';
  transactionId?: Maybe<Scalars['String']>;
  transactionOutputIndex?: Maybe<Scalars['String']>;
};

export type PendingChannelType = {
  __typename?: 'pendingChannelType';
  close_transaction_id?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  is_closing?: Maybe<Scalars['Boolean']>;
  is_opening?: Maybe<Scalars['Boolean']>;
  local_balance?: Maybe<Scalars['Int']>;
  local_reserve?: Maybe<Scalars['Int']>;
  partner_public_key?: Maybe<Scalars['String']>;
  received?: Maybe<Scalars['Int']>;
  remote_balance?: Maybe<Scalars['Int']>;
  remote_reserve?: Maybe<Scalars['Int']>;
  sent?: Maybe<Scalars['Int']>;
  transaction_fee?: Maybe<Scalars['Int']>;
  transaction_id?: Maybe<Scalars['String']>;
  transaction_vout?: Maybe<Scalars['Int']>;
  partner_node_info?: Maybe<Node>;
};

export type WalletInfoType = {
  __typename?: 'walletInfoType';
  build_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  commit_hash?: Maybe<Scalars['String']>;
  is_autopilotrpc_enabled?: Maybe<Scalars['Boolean']>;
  is_chainrpc_enabled?: Maybe<Scalars['Boolean']>;
  is_invoicesrpc_enabled?: Maybe<Scalars['Boolean']>;
  is_signrpc_enabled?: Maybe<Scalars['Boolean']>;
  is_walletrpc_enabled?: Maybe<Scalars['Boolean']>;
  is_watchtowerrpc_enabled?: Maybe<Scalars['Boolean']>;
  is_wtclientrpc_enabled?: Maybe<Scalars['Boolean']>;
};

export type DecodeType = {
  __typename?: 'decodeType';
  chain_address?: Maybe<Scalars['String']>;
  cltv_delta?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  description_hash?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mtokens?: Maybe<Scalars['String']>;
  payment?: Maybe<Scalars['String']>;
  routes?: Maybe<Array<Maybe<Array<Maybe<RouteType>>>>>;
  safe_tokens?: Maybe<Scalars['Int']>;
  tokens?: Maybe<Scalars['Int']>;
  destination_node: Node;
  probe_route?: Maybe<ProbeRoute>;
};

export type RouteType = {
  __typename?: 'RouteType';
  base_fee_mtokens?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  cltv_delta?: Maybe<Scalars['Int']>;
  fee_rate?: Maybe<Scalars['Int']>;
  public_key?: Maybe<Scalars['String']>;
};

export type PayType = {
  __typename?: 'payType';
  fee?: Maybe<Scalars['Int']>;
  fee_mtokens?: Maybe<Scalars['String']>;
  hops?: Maybe<Array<Maybe<HopsType>>>;
  id?: Maybe<Scalars['String']>;
  is_confirmed?: Maybe<Scalars['Boolean']>;
  is_outgoing?: Maybe<Scalars['Boolean']>;
  mtokens?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  safe_fee?: Maybe<Scalars['Int']>;
  safe_tokens?: Maybe<Scalars['Int']>;
  tokens?: Maybe<Scalars['Int']>;
};

export type HopsType = {
  __typename?: 'hopsType';
  channel?: Maybe<Scalars['String']>;
  channel_capacity?: Maybe<Scalars['Int']>;
  fee_mtokens?: Maybe<Scalars['String']>;
  forward_mtokens?: Maybe<Scalars['String']>;
  timeout?: Maybe<Scalars['Int']>;
};

export type NewInvoiceType = {
  __typename?: 'newInvoiceType';
  chain_address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  request?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  tokens?: Maybe<Scalars['Int']>;
};

export type NetworkInfoType = {
  __typename?: 'networkInfoType';
  averageChannelSize?: Maybe<Scalars['String']>;
  channelCount?: Maybe<Scalars['Int']>;
  maxChannelSize?: Maybe<Scalars['Int']>;
  medianChannelSize?: Maybe<Scalars['Int']>;
  minChannelSize?: Maybe<Scalars['Int']>;
  nodeCount?: Maybe<Scalars['Int']>;
  notRecentlyUpdatedPolicyCount?: Maybe<Scalars['Int']>;
  totalCapacity?: Maybe<Scalars['String']>;
};

export type GetForwardType = {
  __typename?: 'getForwardType';
  token?: Maybe<Scalars['String']>;
  forwards?: Maybe<Array<Maybe<ForwardType>>>;
};

export type ForwardType = {
  __typename?: 'forwardType';
  created_at?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Int']>;
  fee_mtokens?: Maybe<Scalars['String']>;
  incoming_channel?: Maybe<Scalars['String']>;
  mtokens?: Maybe<Scalars['String']>;
  outgoing_channel?: Maybe<Scalars['String']>;
  tokens?: Maybe<Scalars['Int']>;
  incoming_channel_info?: Maybe<Channel>;
  outgoing_channel_info?: Maybe<Channel>;
};

export type PaymentType = {
  __typename?: 'PaymentType';
  created_at: Scalars['String'];
  destination: Scalars['String'];
  destination_node?: Maybe<Node>;
  fee: Scalars['Int'];
  fee_mtokens: Scalars['String'];
  hops?: Maybe<Array<Maybe<Node>>>;
  id: Scalars['String'];
  index?: Maybe<Scalars['Int']>;
  is_confirmed: Scalars['Boolean'];
  is_outgoing: Scalars['Boolean'];
  mtokens: Scalars['String'];
  request?: Maybe<Scalars['String']>;
  safe_fee: Scalars['Int'];
  safe_tokens?: Maybe<Scalars['Int']>;
  secret: Scalars['String'];
  tokens: Scalars['Int'];
  type: Scalars['String'];
  date: Scalars['String'];
};

export type InvoiceType = {
  __typename?: 'InvoiceType';
  chain_address?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  description: Scalars['String'];
  description_hash?: Maybe<Scalars['String']>;
  expires_at: Scalars['String'];
  id: Scalars['String'];
  is_canceled?: Maybe<Scalars['Boolean']>;
  is_confirmed: Scalars['Boolean'];
  is_held?: Maybe<Scalars['Boolean']>;
  is_private: Scalars['Boolean'];
  is_push?: Maybe<Scalars['Boolean']>;
  received: Scalars['Int'];
  received_mtokens: Scalars['String'];
  request?: Maybe<Scalars['String']>;
  secret: Scalars['String'];
  tokens: Scalars['Int'];
  type: Scalars['String'];
  date: Scalars['String'];
};

export type Transaction = InvoiceType | PaymentType;

export type GetResumeType = {
  __typename?: 'getResumeType';
  token?: Maybe<Scalars['String']>;
  resume?: Maybe<Array<Maybe<Transaction>>>;
};

export type ChannelHealth = {
  __typename?: 'channelHealth';
  id?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  volumeNormalized?: Maybe<Scalars['String']>;
  averageVolumeNormalized?: Maybe<Scalars['String']>;
  partner?: Maybe<Node>;
};

export type ChannelsHealth = {
  __typename?: 'channelsHealth';
  score?: Maybe<Scalars['Int']>;
  channels?: Maybe<Array<Maybe<ChannelHealth>>>;
};

export type ChannelTimeHealth = {
  __typename?: 'channelTimeHealth';
  id?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  significant?: Maybe<Scalars['Boolean']>;
  monitoredTime?: Maybe<Scalars['Int']>;
  monitoredUptime?: Maybe<Scalars['Int']>;
  monitoredDowntime?: Maybe<Scalars['Int']>;
  partner?: Maybe<Node>;
};

export type ChannelsTimeHealth = {
  __typename?: 'channelsTimeHealth';
  score?: Maybe<Scalars['Int']>;
  channels?: Maybe<Array<Maybe<ChannelTimeHealth>>>;
};

export type FeeHealth = {
  __typename?: 'feeHealth';
  score?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
  base?: Maybe<Scalars['String']>;
  rateScore?: Maybe<Scalars['Int']>;
  baseScore?: Maybe<Scalars['Int']>;
  rateOver?: Maybe<Scalars['Boolean']>;
  baseOver?: Maybe<Scalars['Boolean']>;
};

export type ChannelFeeHealth = {
  __typename?: 'channelFeeHealth';
  id?: Maybe<Scalars['String']>;
  partnerSide?: Maybe<FeeHealth>;
  mySide?: Maybe<FeeHealth>;
  partner?: Maybe<Node>;
};

export type ChannelsFeeHealth = {
  __typename?: 'channelsFeeHealth';
  score?: Maybe<Scalars['Int']>;
  channels?: Maybe<Array<Maybe<ChannelFeeHealth>>>;
};

export type RouteMessageType = {
  __typename?: 'RouteMessageType';
  type: Scalars['String'];
  value: Scalars['String'];
};

export type RouteHopType = {
  __typename?: 'RouteHopType';
  channel: Scalars['String'];
  channel_capacity: Scalars['Int'];
  fee: Scalars['Int'];
  fee_mtokens: Scalars['String'];
  forward: Scalars['Int'];
  forward_mtokens: Scalars['String'];
  public_key: Scalars['String'];
  timeout: Scalars['Int'];
};

export type GetRouteType = {
  __typename?: 'GetRouteType';
  confidence?: Maybe<Scalars['Int']>;
  fee: Scalars['Int'];
  fee_mtokens: Scalars['String'];
  hops: Array<RouteHopType>;
  messages?: Maybe<Array<Maybe<RouteMessageType>>>;
  mtokens: Scalars['String'];
  safe_fee: Scalars['Int'];
  safe_tokens: Scalars['Int'];
  timeout: Scalars['Int'];
  tokens: Scalars['Int'];
};

export type ProbedRouteHop = {
  __typename?: 'probedRouteHop';
  channel: Scalars['String'];
  channel_capacity: Scalars['Int'];
  fee: Scalars['Int'];
  fee_mtokens: Scalars['String'];
  forward: Scalars['Int'];
  forward_mtokens: Scalars['String'];
  public_key: Scalars['String'];
  timeout: Scalars['Int'];
  node: Node;
};

export type ProbedRoute = {
  __typename?: 'probedRoute';
  confidence: Scalars['Int'];
  fee: Scalars['Int'];
  fee_mtokens: Scalars['String'];
  hops: Array<ProbedRouteHop>;
  mtokens: Scalars['String'];
  safe_fee: Scalars['Int'];
  safe_tokens: Scalars['Int'];
  timeout: Scalars['Int'];
  tokens: Scalars['Int'];
};

export type ProbeRoute = {
  __typename?: 'ProbeRoute';
  route?: Maybe<ProbedRoute>;
};

export type BosIncreaseType = {
  __typename?: 'bosIncreaseType';
  increased_inbound_on?: Maybe<Scalars['String']>;
  liquidity_inbound?: Maybe<Scalars['String']>;
  liquidity_inbound_opening?: Maybe<Scalars['String']>;
  liquidity_inbound_pending?: Maybe<Scalars['String']>;
  liquidity_outbound?: Maybe<Scalars['String']>;
  liquidity_outbound_opening?: Maybe<Scalars['String']>;
  liquidity_outbound_pending?: Maybe<Scalars['String']>;
};

export type BosDecreaseType = {
  __typename?: 'bosDecreaseType';
  decreased_inbound_on?: Maybe<Scalars['String']>;
  liquidity_inbound?: Maybe<Scalars['String']>;
  liquidity_inbound_opening?: Maybe<Scalars['String']>;
  liquidity_inbound_pending?: Maybe<Scalars['String']>;
  liquidity_outbound?: Maybe<Scalars['String']>;
  liquidity_outbound_opening?: Maybe<Scalars['String']>;
  liquidity_outbound_pending?: Maybe<Scalars['String']>;
};

export type BosResultType = {
  __typename?: 'bosResultType';
  rebalanced?: Maybe<Scalars['String']>;
  rebalance_fees_spent?: Maybe<Scalars['String']>;
};

export type BosRebalanceResultType = {
  __typename?: 'bosRebalanceResultType';
  increase?: Maybe<BosIncreaseType>;
  decrease?: Maybe<BosDecreaseType>;
  result?: Maybe<BosResultType>;
};

export type BaseNodesType = {
  __typename?: 'baseNodesType';
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  public_key?: Maybe<Scalars['String']>;
  socket?: Maybe<Scalars['String']>;
};
