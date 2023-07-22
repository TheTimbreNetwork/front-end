"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Homepage_Trending from "./components/homepage_trending";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton />
      <Homepage_Trending />
    </main>
  );
}
