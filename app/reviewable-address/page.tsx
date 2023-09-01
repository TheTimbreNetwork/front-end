"use client";

import { useEffect, useState } from "react";
import { useContractWrite, useNetwork } from "wagmi";
import { ABIEntry } from "../types/types";
import TimbreProtocolABI_Polygon_Import from "../abi/TimbreProtocolABI_polygon.json";
import TimbreProtocolABI_PolygonZKEVM_Import from "../abi/TimbreProtocolABI_polygonZkEvm.json";
import TimbreProtocolABI_Gnosis_Import from "../abi/TimbreProtocolABI_gnosis.json";

export default function ReviewableAddressPage() {
  const [address, setAddress] = useState("");
  const { chain } = useNetwork();

  const [timbreProtocolABI, setTimbreProtocolABI] = useState<
    ABIEntry[] | undefined
  >(undefined);
  const [timbreProtocolAddress, setTimbreProtocolAddress] = useState<
    string | undefined
  >(undefined);

  const TimbreProtocolABI_Polygon: ABIEntry[] =
    TimbreProtocolABI_Polygon_Import as ABIEntry[];
  const TimbreProtocolABI_PolygonZKEVM: ABIEntry[] =
    TimbreProtocolABI_PolygonZKEVM_Import as ABIEntry[];
  const TimbreProtocolABI_Gnosis: ABIEntry[] =
    TimbreProtocolABI_Gnosis_Import as ABIEntry[];

  useEffect(() => {
    if (chain) {
      if (chain.id === 137) {
        setTimbreProtocolABI(TimbreProtocolABI_Polygon);
        setTimbreProtocolAddress(
          process.env.NEXT_PUBLIC_TIMBRE_PROTOCOL_POLYGON_ADDRESS
        );
      } else if (chain.id === 1101) {
        setTimbreProtocolABI(TimbreProtocolABI_PolygonZKEVM);
        setTimbreProtocolAddress(
          process.env.NEXT_PUBLIC_TIMBRE_PROTOCOL_POLYGON_ZKEVM_ADDRESS
        );
      } else if (chain.id === 100) {
        setTimbreProtocolABI(TimbreProtocolABI_Gnosis);
        setTimbreProtocolAddress(
          process.env.NEXT_PUBLIC_TIMBRE_PROTOCOL_GNOSIS_ADDRESS
        );
      }
    }
  }, [chain]);

  const { data: newData, write } = useContractWrite({
    address: timbreProtocolAddress as `0x${string}`,
    abi: timbreProtocolABI,
    functionName: "addReviewableAddress"
  });

  async function submitNewReviewableAddress(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    write({ args: [address] });
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Add Reviewable Address
      </h1>
      <form className="w-full mt-6" onSubmit={submitNewReviewableAddress}>
        <div className="mt-6 flex flex-col w-8/12 justify-center mx-auto">
          <label
            htmlFor="address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-row w-8/12 justify-center mx-auto mt-4">
          <div className="flex-grow">
            <button
              type="submit"
              className="w-full rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Add Address
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
