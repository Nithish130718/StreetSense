import React, { useState } from "react";
import { reviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleBackButtonClick = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextButtonClick = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More than <span className="rw-text-num">2 years of experience in the field</span>
        </p>

        <p className="rw-text-desc">
          Don't believe us, Check what our users say
        </p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{currentReview.review}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{currentReview.name}</p>
            {currentReview.position && (
              <p className="rw-reviewer-position">{currentReview.position}</p>
            )}
            {currentReview.location && (
              <p className="rw-reviewer-location">{currentReview.location}</p>
            )}
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={handleBackButtonClick}
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={handleNextButtonClick}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
