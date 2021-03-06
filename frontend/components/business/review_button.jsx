import React from 'react';
import { hashHistory } from 'react-router';

class ReviewButton extends React.Component {

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit() {
    const businessId = this.props.id;
    const url = `/businesses/${businessId}/review`;
    hashHistory.push(url);
  }

  render() {
    return (
      <button className="review-button" onClick={ this._handleSubmit}>
        Write a Review
      </button>
    );

  }

}

export default ReviewButton;
