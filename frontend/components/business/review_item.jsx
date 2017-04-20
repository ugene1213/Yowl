import React from 'react';
import ReviewShow from './review_show';

const ReviewItem = ({ review: {created_at, body, rating, user}}) => {

  const num = (review) => {
    const thing = parseInt(review);

    if (thing === 1) {
      return "one";
    }
    else if (thing === 2) {
      return "two";
    }
    else if (thing === 3) {
      return "three";
    }
    else if(thing === 4) {
      return "four";
    }
    else if(thing === 5) {
      return "five";
    } else {
      return "zero";
    }

  };
  // <img src={ window.yowlAssets["genericUser"] } className="reviewer-pic"/>
  // <div className={"review-rating"} ><img src={window.yowlAssets[num(rating)]} className="yay" /></div>

  return (
    <li className="review-content group">

      <div className="review-user-info">
        <div className="review-author">{ user.username }</div>
      </div>

      <div className="review-main">
        <div className="review-rating-date group">
          <div className="review-date">{created_at.slice(0,10)}</div>
        </div>

        <div className="review-body">{body}</div>
      </div>

    </li>
  );


};


export default ReviewItem;
