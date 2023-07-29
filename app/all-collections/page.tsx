"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

const GET_ALL_REVIEWABLE_ADDRESSES = gql`
  query GetAllReviewableAddresses {
    addedReviewableAddresses {
      id
      newReviewableAddress
      blockNumber
      blockTimestamp
    }
  }
`;

// const reviewableAddresses = [
//   {
//     name: "Lindsay Walton",
//     title: "Front-end Developer",
//     email: "lindsay.walton@example.com",
//     role: "Member",
//   },
//   // More reviewableAddresses...
// ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Table() {
  const { data: allReviewableAddresses } = useQuery(
    GET_ALL_REVIEWABLE_ADDRESSES
  );
  const [reviewableAddresses, setReviewableAddresses] = useState([]);

  type ReviewableAddress = {
    id: string;
    newReviewableAddress: string;
    blockNumber: string;
    blockTimestamp: string;
  };

  useEffect(() => {
    if (allReviewableAddresses) {
      setReviewableAddresses(allReviewableAddresses.addedReviewableAddresses);
      console.log(reviewableAddresses);
    }
  }, [allReviewableAddresses]);

  return (
    <div className="px-2 sm:px-3 lg:px-4 w-8/12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold leading-6 text-gray-900">
            All Collection
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the contracts that are reviewable.
          </p>
        </div>
        {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to collection
          </button>
        </div> */}
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Contract Address
                  </th>
                  {/* <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Role
                  </th> */}
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviewableAddresses.map(
                  (address: ReviewableAddress, addressIdx) => (
                    <tr key={address.id}>
                      <td
                        className={classNames(
                          addressIdx !== reviewableAddresses.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                        )}
                      >
                        {address.newReviewableAddress}
                      </td>
                      {/* <td
                      className={classNames(
                        personIdx !== reviewableAddresses.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"
                      )}
                    >
                      {person.title}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== reviewableAddresses.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"
                      )}
                    >
                      {person.email}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== reviewableAddresses.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {person.role}
                    </td> */}
                      <td
                        className={classNames(
                          addressIdx !== reviewableAddresses.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                        )}
                      >
                        <a
                          href={"product/" + address.newReviewableAddress}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View Product
                          <span className="sr-only">
                            , {address.newReviewableAddress}
                          </span>
                        </a>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center mt-12">
      <Table />
    </div>
  );
}
