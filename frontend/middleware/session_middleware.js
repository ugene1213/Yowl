import { SIGNUP, LOGIN, LOGOUT } from '../actions/session_actions';
import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

import { signup, login, logout } from '../util/session_api_util';
import { hashHistory } from 'react-router';




const SessionMiddleware = ({ getState, dispatch }) => next => action => {

  const successCallback = (user) => dispatch(receiveCurrentUser(user));
  const successLogOut = () => {
    next(action);
    hashHistory.push('/');
  };
  const errorCallback = (error) => {
    const errors = error.responseJSON;

    dispatch(receiveErrors(errors));
  };

  switch(action.type) {
    case SIGNUP:
      signup(action.newUser, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      debugger
      logout( successLogOut );
      break;
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};


export default SessionMiddleware;
