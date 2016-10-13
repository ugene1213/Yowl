import React from 'react';
import { Link, hashHistory } from 'react-router';
import ReviewShow from './review_show';


class ReviewForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = { rating: 5, body: ""};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
      this.update = this.update.bind(this);
    }


    handleSubmit(event) {
      event.preventDefault();
      const businessId = parseInt(this.props.params.id);
      const review = Object.assign({}, { business_id: businessId }, this.state);
      this.props.createReview({ review });
      this.navigateToBusinessShow();
    }

    navigateToBusinessShow() {
      const businessUrl = "/businesses/" + this.props.params.id;
      hashHistory.push(businessUrl);
    }

    update(property) {

      return e => {
  
        this.setState({
          [property]: e.currentTarget.value
        });
      };
    }

    componentDidMount() {
      this.props.requestBusinesses();
    }

    render() {

      return (

        <div className="review-page group">
          <div className="review-page-review-section">

            <div className="review-page-header">
              <h1 className="review-header-word">Write a Review</h1>

              <div className="review-business-info group">
                <img src={window.yowlAssets.genericImage} className="review-header-logo" />
                <div className="review-business-info-specifics">
                  <Link to= {"/businesses/" + this.props.params.id} >
                    <div className="review-business-name">{this.props.business.name}</div>
                  </Link>
                  <div className="review-business-address">{this.props.business.address}</div>
                </div>
              </div>
            </div>

            <div className="review-form">
              <h2 className="review-form-header">Your Review</h2>


                <form onSubmit={this.handleSubmit} >
                  <div className="review-form-actual">
                    <input type="number"
                      className="review-rating-number"
                      value={this.state.rating}
                      onChange={this.update("rating")}/>
                    <label>Select Your Rating</label>
                    <br/>

                    <textarea
                      className="comment-body"
                      cols='30'
                      rows='10'
                      value={this.state.body}
                      onChange={this.update("body")}
                      placeholder= "Your review helps others learn about great local businesses.Please don't review this
                      business if you received a freebie for writing this review, or if you're connected in any way to the
                      owner or employees."
                      ></textarea>
                    <br/>
                </div>
                  <input type="submit" className="review-form-submit" value="Post"/>
                </form>
              <button onClick={this.navigateToBusinessShow} className="review-cancel">Cancel</button>
            </div>
          </div>

          <div className="review-page-old-reviews">
            <h1>Reviews for { this.props.business.name }</h1>

            <div className="review-page-list-of-reviews">
              <ReviewShow business= {this.props.business } num={ 5 } />
            </div>

          </div>
        </div>

      );
    }

}

export default ReviewForm;
