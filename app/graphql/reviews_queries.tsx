import { gql } from "@apollo/client";

// prettier-ignore
export const GET_ALL_REVIEWS = gql`
  query GetAllReviews {
    addedReviews(
      orderBy: currentBlockTime
      orderDirection: desc
    ) {
      id
      reviewer
      existingReviewableAddress
      _reviewDecentralizedStorageURL
    }
  }
`;
