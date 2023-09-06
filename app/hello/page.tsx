"use client";

import Link from "next/link";

import { useBannerState } from "../../context/AllContext";

// keep for later use

export default function Home() {
  const [showBanner, setShowBanner] = useBannerState();

  return (
    <div>
      <div>Hello Page</div>
      <div>myState: {showBanner ? "true" : "false"}</div>
      <Link href="/">
        <button>Go to Home</button>
      </Link>
      <button onClick={() => setShowBanner(!showBanner)}>Toggle myState</button>
    </div>
  );
}
