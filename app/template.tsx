"use client";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useNetwork } from "wagmi";
import { useState, useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [theGraphURI, setTheGraphURI] = useState("");
  const { chain } = useNetwork();

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: theGraphURI
  });

  useEffect(() => {
    if (chain) {
      if (chain.id === 1101) {
        setTheGraphURI(
          process.env.NEXT_PUBLIC_TIMBRE_PROTOCOL_POLYGON_ZKEVM_THEGRAPH_URL
        );
      } else if (chain.id === 100) {
        setTheGraphURI(
          process.env.NEXT_PUBLIC_TIMBRE_PROTOCOL_GNOSIS_THEGRAPH_URL
        );
      } else {
        // chain.id === 137
        setTheGraphURI(
          process.env.NEXT_PUBLIC_TIMBRE_PROTOCOL_POLYGON_THEGRAPH_URL
        );
      }
    }
  }, [chain]);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
