import React from 'react';
import { Link, hashHistory } from 'react-router';
import ReviewShow from './review_show';


class ReviewForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = { rating: 0, body: ""};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
    }


    handleSubmit(event) {
      event.preventDefault();
      const businessId = parseInt(this.props.id);
      const review = Object.assign({}, { business_id: businessId }, this.state);
      this.props.createReview({ review }).then(() => (
        this.navigateToBusinessShow()));
    }

    navigateToBusinessShow() {
      const businessUrl = "/businesses/" + this.props.id;
      hashHistory.push(businessUrl);
    }

    update(property) {
      return e => {
        this.setState({
          [property]: e.currentTarget.value
        });
      };
    }

    renderErrors() {
      return (
        <ul>
          {this.props.errors.map( (error, idx) => <li key={idx}>* { error }!</li>)}
        </ul>
      )

    }

    render() {
      if (typeof this.props.business === "undefined") {
        return (
          <div>Getting the form....</div>
        )
      } else {
        return (

          <div className="review-page group">
            <div className="review-page-review-section">

              <div className="review-page-header">
                <h1 className="review-header-word">Write a Review</h1>
                <div className="review-business-info group">
                  <img src={window.yowlAssets[this.props.business.picture]} className="review-header-logo" />
                  <div className="review-business-info-specifics">
                    <Link to= {"/businesses/" + this.props.id} >
                      <div className="review-business-name">{this.props.business.name}</div>
                    </Link>
                    <div className="review-business-address">{this.props.business.address}</div>
                  </div>
                </div>
              </div>

              <div className="review-form">
                <h2 className="review-form-header">Your Review</h2>
                { this.renderErrors()}


                  <form onSubmit={this.handleSubmit} >
                    <div className="review-form-actual">

                      <input type="radio"
                        className="review-rating-number 1"
                        name="rating"
                        value="1"
                        onChange={this.update("rating")}/>
                      <input type="radio"
                        className="review-rating-number 2"
                        name="rating"
                        value="2"
                        onChange={this.update("rating")}/>
                      <input type="radio"
                        className="review-rating-number 3"
                        name="rating"
                        value="3"
                        onChange={this.update("rating")}/>
                      <input type="radio"
                        className="review-rating-number 4"
                        name="rating"
                        value="4"
                        onChange={this.update("rating")}/>
                      <input type="radio"
                        className="review-rating-number-5"
                        name="rating"
                        value="5"
                        onChange={this.update("rating")} />

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

}

export default ReviewForm;
