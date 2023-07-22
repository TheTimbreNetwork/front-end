"use client";

import { TextArea } from "../../../components/text_area";

import { useState } from "react";

function SelectMenu({
  menuDescription,
  menuTitle,
  menuDefaultValue,
  menuOptions,
  setter
}) {
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

  function uploadReviewToDecentralizedStorage(e) {
    e.preventDefault();
    upload();
  }

  // function uploadReviewToBlockchain(e) {
  //   e.preventDefault();
  //   console.log(transaction);
  //   disabled={!uploadedText}
  //    onSubmit={uploadReviewToBlockchain}
  // }

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl">Post Review</h1>
      <form className="w-full mt-6">
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
            type="submit"
            className="rounded-md w-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            (Step 2) Post Review
          </button>
        </div>
      </form>
    </div>
  );
}
