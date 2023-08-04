"use client";

import Homepage_Trending from "./components/homepage_trending";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Homepage_Trending /> */}
      <Hero />
    </main>
  );
}
