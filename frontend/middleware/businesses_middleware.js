import { REQUEST_BUSINESS, REQUEST_BUSINESSES, RECEIVE_BUSINESSES,
      CREATE_REVIEW, receiveBusiness, receiveBusinesses,
      receiveReviewErrors
      } from '../actions/business_actions';

import { fetchBusinesses, fetchBusiness, createReview } from '../util/business_api_util';



const BusinessesMiddleware = ({ getState, dispatch }) => next => action => {

  const success1 = (businesses) => dispatch(receiveBusinesses(businesses));
  const success2 = (business) => dispatch(receiveBusiness(business));
  const error = (error) => {
    const errors = error.responseJSON;

    dispatch(receiveReviewErrors(errors));

    return errors;


  }

  switch(action.type) {
    case REQUEST_BUSINESSES:
      fetchBusinesses(success1);
      return next(action);
    case REQUEST_BUSINESS:
      fetchBusiness(action.id, success2);
      return next(action);
    case CREATE_REVIEW:
      return createReview(action.review).then(success2, error);
      break;
    default:
      return next(action);

  }
};

export default BusinessesMiddleware;
