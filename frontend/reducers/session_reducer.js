import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';


const _defaultSession = Object.freeze({
  currentUser: null,
  errors: []
});


const SessionReducer = (state = _defaultSession, action) => {
  debugger 
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _defaultSession, { currentUser });

    case RECEIVE_ERRORS:
      return merge({}, _defaultSession, { errors: action.errors});

    case LOGOUT:
      return merge({}, _defaultSession);
    default:
      return state;
  }
};

export default SessionReducer;
