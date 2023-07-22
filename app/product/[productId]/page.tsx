"use client";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

export const LensApolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/35226/timbrenetwork1/version/latest",
});

export default function Page({ params }: { params: { productId: string } }) {
  const GET_ALL_REVIEWS_FOR_ADDRESS = gql`
    query GetAllReviewsForAddress {
      addedReviews(
        where: {
          existingReviewableAddress: "${params.productId}"
        }
      ) {
        id
        existingReviewableAddress
        _reviewDecentralizedStorageURL
        currentBlockTime
      }
    }
  `;

  const { data: allReviewsForAddress } = useQuery(GET_ALL_REVIEWS_FOR_ADDRESS);
  const [reviewsForAddress, setReviewsForAddress] = useState([]);

  useEffect(() => {
    if (allReviewsForAddress) {
      console.log(allReviewsForAddress.addedReviews);
      setReviewsForAddress(allReviewsForAddress.addedReviews);
    }
  }, [allReviewsForAddress]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Product: {params.productId}</h1>
      <h2>Reviews</h2>
      {reviewsForAddress.map((review, reviewIdx) => console.log(review))}
    </div>
  );
}
