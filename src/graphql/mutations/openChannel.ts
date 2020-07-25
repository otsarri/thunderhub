import gql from 'graphql-tag';

export const OPEN_CHANNEL = gql`
  mutation OpenChannel(
    $amount: Int!
    $partnerPublicKey: String!
    $tokensPerVByte: Int
    $isPrivate: Boolean
  ) {
    openChannel(
      amount: $amount
      partnerPublicKey: $partnerPublicKey
      tokensPerVByte: $tokensPerVByte
      isPrivate: $isPrivate
    ) {
      transactionId
      transactionOutputIndex
    }
  }
`;
