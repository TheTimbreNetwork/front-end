"use client";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

import { Fragment } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Tab } from "@headlessui/react";
import { useNetwork } from "wagmi";

import { ProductMap, getTrendingProducts } from "../../api/trendingProducts";
import { Review } from "../../types/types";

// URLs for Reviews
// https://yjxf7u26qbo2zhfsdakdvgqgyjp24s4wff6bjpozmjqebummaejq.arweave.net/wm5f016AXaycshgUOpoGwl-uS5YpfBS92WJgQNGMARM
// https://ehgz3mc2hratntnemqedyn73mzgbhe3vachoiaxmsylu6ma7ev4q.arweave.net/Ic2dsFo8QTbNpGQIPDf7ZkwTk3UAjuQC7JYXTzAfJXk

interface ReviewRowProps {
  review: Review;
  reviewIdx: number;
}

function ReviewRow({ review, reviewIdx }: ReviewRowProps) {
  const [reviewer, setReviewer] = useState("Anonymous");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewContent, setReviewContent] = useState("");

  function myAddressTrimmed(address: string) {
    return address.slice(0, 4) + "..." + address.slice(-4);
  }

  function myUrlTrimmed(url: string) {
    return url.slice(8, 12) + "..." + url.slice(-4);
  }

  useEffect(() => {
    async function init() {
      if (review._reviewDecentralizedStorageURL) {
        const response = await fetch(review._reviewDecentralizedStorageURL);
        const textContent = await response.text();

        try {
          let modifiedTextContent = textContent.split("[reviewContent]");
          modifiedTextContent = modifiedTextContent[1].split("[rating]");
          setReviewContent(modifiedTextContent[0]);
          setReviewRating(Number(modifiedTextContent[1]));
        } catch (e) {
          console.error(e);
        }
      }
    }

    init();
  }, [review]);

  return (
    <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
      <div className="flex-none py-10">
        <img
          src={
            "https://nebout-hamm.com/wp-content/uploads/2017/11/smiling-emoticon-square-face.png"
          }
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
        />
      </div>
      <div
        className={classNames(
          reviewIdx === 0 ? "" : "border-t border-gray-200",
          "py-10"
        )}
      >
        <h3 className="font-medium text-gray-900">
          {myAddressTrimmed(review.reviewer)}
        </h3>
        {/* <p>
          <time dateTime={review.datetime}>{review.date}</time>
        </p> */}

        <div className="mt-4 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                reviewRating > rating ? "text-yellow-400" : "text-gray-300",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{String(reviewRating)} out of 5 stars</p>

        <div
          className="prose prose-sm mt-4 max-w-none text-gray-500"
          dangerouslySetInnerHTML={{ __html: reviewContent }}
        />
        <p className="pt-2 text-xs">
          <a href={review._reviewDecentralizedStorageURL}>
            Decentralized Storage Tx:{" "}
            <span className="text-blue-500">
              {myUrlTrimmed(review._reviewDecentralizedStorageURL)}
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

// const reviews = {
//   average: 4,
//   featured: [
//     {
//       id: 1,
//       rating: 5,
//       content: `
//         <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
//       `,
//       date: "July 16, 2021",
//       datetime: "2021-07-16",
//       author: "Emily Selman",
//       avatarSrc:
//         "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
//     },
//     {
//       id: 2,
//       rating: 5,
//       content: `
//         <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
//       `,
//       date: "July 12, 2021",
//       datetime: "2021-07-12",
//       author: "Hector Gibbons",
//       avatarSrc:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
//     },
//     // More reviews...
//   ],
// };
const faqs = [
  {
    question: "What format are these icons?",
    answer:
      "The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code."
  },
  {
    question: "Can I use the icons at different sizes?",
    answer:
      "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance."
  }
  // More FAQs...
];
const license = {
  href: "#",
  summary:
    "For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.",
  content: `
    <h4>Overview</h4>

    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>

    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>

    <h4>What you can do with it</h4>

    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>

    <h4>What you can\'t do with it</h4>

    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type ProductOverviewProps = {
  productId: string; // Or number or whatever the type should be
  product: ProductMap; // Assuming you have a type called ProductType
};

function ProductOverview({ productId, product }: ProductOverviewProps) {
  const GET_ALL_REVIEWS_FOR_ADDRESS = gql`
    query GetAllReviewsForAddress {
      addedReviews(
        where: {
          existingReviewableAddress: "${productId}"
        }
      ) {
        id
        reviewer
        existingReviewableAddress
        _reviewDecentralizedStorageURL
        currentBlockTime
      }
    }
  `;

  const { data: allReviewsForAddress } = useQuery(GET_ALL_REVIEWS_FOR_ADDRESS);
  const [reviewsForAddress, setReviewsForAddress] = useState<Review[]>([]);

  useEffect(() => {
    if (allReviewsForAddress) {
      setReviewsForAddress(allReviewsForAddress.addedReviews);
    }
  }, [allReviewsForAddress]);

  return (
    <div>
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-5 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.imageSrc}
                className="object-cover object-center width"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>

              {/* <div>
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
              </div> */}
            </div>

            <p className="mt-6 text-gray-500">{product.description}</p>

            <a href={productId + "/post-review"}>
              <button
                type="button"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Post Review
              </button>
            </a>
          </div>

          <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-7 lg:mt-0 lg:max-w-none">
            <Tab.Group as="div">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? "border-indigo-600 text-indigo-600"
                          : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                        "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                      )
                    }
                  >
                    Customer Reviews
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel className="-mb-10">
                  <h3 className="sr-only">Customer Reviews</h3>

                  {reviewsForAddress.map((review: Review, reviewIdx) => (
                    <ReviewRow
                      key={review.id}
                      review={review}
                      reviewIdx={reviewIdx}
                    />
                  ))}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: { productId: string } }) {
  const [product, setProduct] = useState<ProductMap>({} as ProductMap);

  const { chain } = useNetwork();

  useEffect(() => {
    if (chain) {
      const reviewProduct: ProductMap =
        getTrendingProducts(chain.id).find(
          (review) => review.contractAddress === params.productId
        ) || ({} as ProductMap);
      setProduct(reviewProduct);
    }
  }, [chain]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <ProductOverview productId={params.productId} product={product} />
    </div>
  );
}
