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
    let url;

    if (chain) {
      if (chain.id === 1101) {
        url =
          process.env.NEXT_PUBLIC_TIMBRE_PROTOCOL_POLYGON_ZKEVM_THEGRAPH_URL;
      } else if (chain.id === 100) {
        url = process.env.NEXT_PUBLIC_TIMBRE_PROTOCOL_GNOSIS_THEGRAPH_URL;
      } else {
        // chain.id === 137
        url = process.env.NEXT_PUBLIC_TIMBRE_PROTOCOL_POLYGON_THEGRAPH_URL;
      }
      if (url) setTheGraphURI(url);
    }
  }, [chain]);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
