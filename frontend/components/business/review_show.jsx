import React from 'react';
import ReviewItem from './review_item';

const ReviewShow = (props) => {
  const businessReviews = props.business.reviews;
  const reviewList = businessReviews.slice(0, props.num).map( (review) => (
    <ReviewItem review={ review } key={review.id}/>
  ));

  return (
    <div className="reviews-container">

      <ul className="reviews-list">
        { reviewList }
      </ul>


    </div>
  );
};


export default ReviewShow;
