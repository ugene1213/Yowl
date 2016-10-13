import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';
import merge from 'lodash/merge';

const BusinessesReducer = (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      const newBusiness = {[action.business.id]: action.business};
      return merge({}, state, newBusiness);
    default:
      return state;
  }
};


export default BusinessesReducer;
