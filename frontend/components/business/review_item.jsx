import React from 'react';
import ReviewShow from './review_show';


const ReviewItem = ({ review: {created_at, body, rating, user}}) => {

  return (
    <li className="review-content group">

      <div className="review-user-info">
        <img src={ window.yowlAssets["genericUser"] } className="reviewer-pic"/>
        <div className="review-author">{ user.username }</div>
      </div>

      <div className="review-main">
        <div className="review-rating-date group">
          <div className="review-rating"> {rating} </div>
          <div className="review-date">{created_at.slice(0,10)}</div>
        </div>

        <div className="review-body">{body}</div>
      </div>

    </li>
  );


};


export default ReviewItem;
