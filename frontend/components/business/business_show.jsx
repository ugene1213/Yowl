import React from 'react';
import { Link } from 'react-router';
import ReviewShow from './review_show';
import ReviewButton from './review_button';


export default class BusinessShow extends React.Component {




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
                <div className="business-show-rating">{this.props.business.average_rating}</div>
                <div className="business-show-num-reviews">{ this.props.business.reviews.length } reviews</div>
              </div>
              <img src= {window.yowlAssets.genericImage} className="business-show-pic" />
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
