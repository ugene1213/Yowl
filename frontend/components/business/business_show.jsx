import React from 'react';
import { Link } from 'react-router';
import ReviewShow from './review_show';
import ReviewButton from './review_button';


export default class BusinessShow extends React.Component {

  constructor(props) {
    super(props);
    this.num = this.num.bind(this);
  }

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
    this.props.requestBusiness(this.props.businessId);
  }

  render() {
    if (typeof this.props.business === "undefined") {

      return (<div></div>);

    } else {
      return (
        <div className="Business-show-page">
          <br/>
          <div className="business-show-header group">
            <div className="business-name-rating-pic">
              <h1 className="business-show-name">{ this.props.business.name }</h1>
              <div className="business-show-counter group">
                <div className="business-show-rating"><img src={window.yowlAssets[this.num(this.props.business.average_rating)]} className="yay" /></div>
                <div className="business-show-num-reviews">{ this.props.business.reviews.length } reviews</div>
              </div>
              <img src= {window.yowlAssets[this.props.business.picture]} className="business-show-pic" />
            </div>
            <div className="business-show-review-button"><ReviewButton id={this.props.businessId} /></div>
            <br/>
          </div>

          <br/>

          <div className="business-show-reviews">

            <h2 className="reviews-header">Recommended Reviews <b>for { this.props.business.name }</b></h2>

            <ReviewShow business= {this.props.business } num={10} />
          </div>
        </div>
      );

    }

  }

}
