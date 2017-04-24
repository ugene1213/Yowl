import { RECEIVE_REVIEW_ERRORS, GET_DEM_ERRORS } from '../actions/business_actions';


const ErrorsReducer = (state = [], action) => {

  switch(action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return state;
  }
};


export default ErrorsReducer;
