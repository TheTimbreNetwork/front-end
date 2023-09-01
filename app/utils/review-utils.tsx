import { Review } from "../types/types";

export async function initReview(
  review: Review,
  setReviewContent: (content: string) => void,
  setReviewRating: (rating: number) => void,
  setReviewDate: (date: string) => void
) {
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

    // Convert the currentBlockTime to a human readable date
    const date = new Date(Number(review.currentBlockTime) * 1000);
    const today = new Date();
    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      setReviewDate(
        `Today at ${date.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit"
        })}`
      );
    } else if (date.toDateString() === yesterday.toDateString()) {
      setReviewDate(
        `Yesterday at ${date.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit"
        })}`
      );
    } else {
      setReviewDate(
        `${date.toLocaleDateString([], {
          year: "2-digit",
          month: "numeric",
          day: "numeric"
        })} at ${date.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit"
        })}`
      );
    }
  }
}
