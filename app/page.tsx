"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Homepage_Trending from "./components/homepage_trending";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

export const LensApolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/35226/timbrenetwork1/version/latest",
});

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    addedReviewableAddresses {
      id
      newReviewableAddress
      blockNumber
      blockTimestamp
    }
  }
`;

export default function Home() {
  const { data: allUsers } = useQuery(GET_ALL_USERS);

  useEffect(() => {
    console.log(allUsers);
  }, [allUsers]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton />
      <Homepage_Trending />
    </main>
  );
}
