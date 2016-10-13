import { SIGNUP, LOGIN, LOGOUT } from '../actions/session_actions';
import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

import { signup, login, logout } from '../util/session_api_util';




const SessionMiddleware = ({ getState, dispatch }) => next => action => {

  const successCallback = (user) => dispatch(receiveCurrentUser(user));
  const errorCallback = (error) => {
    const errors = error.responseJSON;
    dispatch(receiveErrors(errors));
  };
  
  switch(action.type) {
    case SIGNUP:
      signup(action.newUser, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout( () => next(action) );
      break;
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};


export default SessionMiddleware;
