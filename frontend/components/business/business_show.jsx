import React from 'react';
import { Link } from 'react-router';
import ReviewShow from './review_show';
import ReviewButton from './review_button';


class BusinessShow extends React.Component {


  num(review) {
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
    else if (thing === 5) {
      return "five";
    } else {
      return "zero";
    }

  }

  componentDidMount() {
    if (Object.keys(this.props.businesses).length === 0) {
      this.props.requestBusinesses();
    }
    window.scrollTo(0,0);
  }


  render() {
    if (Object.keys(this.props.businesses).length === 0) {
      return (
        <div></div>
      )
    } else {
      const business = this.props.businesses[this.props.businessId];
      const businessId = this.props.businessId;
      return (
        <div className="Business-show-page">
          <br/>
          <div className="business-show-header group">
            <div className="business-name-rating-pic">
              <h1 className="business-show-name">{ business.name }</h1>
              <img src= {window.yowlAssets[business.picture]} className="business-show-pic" />
              <div className="business-show-rating"><img src={window.yowlAssets[this.num(business.average_rating)]} className="yay" /></div>
              <div className="business-show-counter group">
                <div className="business-show-num-reviews">{ business.reviews.length } reviews</div>
              </div>
            </div>
            <div className="business-show-review-button"><ReviewButton id={businessId} business={business}/></div>
            <br/>
          </div>

          <br/>

          <div className="business-show-reviews">

            <h2 className="reviews-header">Recommended Reviews <b>for { business.name }</b></h2>

            <ReviewShow business= { business } num={10} />
          </div>
        </div>
      )
    }
  }

}


export default BusinessShow;
