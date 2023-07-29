"use client";

import { TextArea } from "../../../components/text_area";
import TimbreProtocolABI_Polygon_Import from "../../../abi/TimbreProtocolABI_polygon.json";
import TimbreProtocolABI_PolygonZKEVM_Import from "../../../abi/TimbreProtocolABI_polygonZkEvm.json";
import TimbreProtocolABI_Gnosis_Import from "../../../abi/TimbreProtocolABI_gnosis.json";
import { SelectMenuProps, ABIEntry } from "../../../types/types";

import { useEffect, useState } from "react";
import { useContractWrite, useNetwork } from "wagmi";

function SelectMenu({
  menuDescription,
  menuTitle,
  menuDefaultValue,
  menuOptions,
  setter
}: SelectMenuProps) {
  return (
    <div>
      <label
        htmlFor={menuDescription}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {menuTitle}
      </label>
      <select
        id={menuDescription}
        name={menuDescription}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={menuDefaultValue}
        onChange={(e) => setter(e.target.value)}
      >
        {menuOptions.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default function Page({ params }: { params: { productId: string } }) {
  const productId = params.productId;
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("5");
  const [decentralizedStorage, setDecentralizedStorage] = useState("Arweave");

  const [transaction, setTransaction] = useState("");
  const [uploadedText, setUploadedText] = useState(false);

  const { chain } = useNetwork();

  const [timbreProtocolABI, setTimbreProtocolABI] = useState<
    ABIEntry[] | undefined
  >(undefined);
  const [timbreProtocolAddress, setTimbreProtocolAddress] = useState<
    string | undefined
  >(undefined);

  async function upload() {
    if (!description || !rating) return;
    try {
      const reviewContentString = "[reviewContent]" + description;
      const ratingString = "[rating]" + rating;
      const entireReviewString = JSON.stringify(
        reviewContentString + ratingString
      );
      const response = await fetch("/api/upload", {
        method: "POST",
        body: entireReviewString
      });
      const json = await response.json();
      console.log("json:", json);
      setTransaction(json.txId);
      setUploadedText(true);
    } catch (err) {
      console.log({ err });
    }
  }

  function uploadReviewToDecentralizedStorage(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    upload();
  }

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
    functionName: "addReview"
  });

  function uploadReviewToBlockchain(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log([productId, transaction, 0]);
    write({ args: [productId, transaction, 0] });
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Post Review
      </h1>
      <form className="w-full mt-6" onSubmit={uploadReviewToBlockchain}>
        <TextArea setDescription={setDescription} />
        <div className="mt-6 flex flex-col w-8/12 justify-center mx-auto">
          <div className="">
            <SelectMenu
              menuDescription="rating"
              menuTitle="Rating"
              menuDefaultValue="5"
              menuOptions={["1", "2", "3", "4", "5"]}
              setter={setRating}
            />
          </div>
          <div className="mt-4">
            <SelectMenu
              menuDescription="decentralizedStorage"
              menuTitle="Decentralized Storage"
              menuDefaultValue="Arweave"
              menuOptions={["Arweave"]}
              setter={setDecentralizedStorage}
            />
          </div>
        </div>
        <div className="flex flex-col w-8/12 justify-end mx-auto mt-4">
          <button
            onClick={uploadReviewToDecentralizedStorage}
            className="rounded-md w-full bg-slate-600 px-3 py-2 my-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            (Step 1) Upload Review to Decentralized Storage
          </button>
          <button
            disabled={!uploadedText}
            type="submit"
            className={`rounded-md w-full ${
              !uploadedText ? "bg-indigo-200" : "bg-indigo-600"
            } px-3 py-2 text-sm font-semibold text-white shadow-sm ${
              !uploadedText ? "hover:bg-indigo-100" : "hover:bg-indigo-500"
            } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            (Step 2) Post Review
          </button>
        </div>
      </form>
    </div>
  );
}
