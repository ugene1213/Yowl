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
      return merge({}, state, { currentUser });

    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors});

    case LOGOUT:
      return merge({}, _defaultSession);
    default:
      return state;
  }
};

// const SessionReducer = (state = { currentUser: null, errors: [] }, action) => {
//   switch (action.type) {
//     case RECEIVE_CURRENT_USER: {
//       const nextState = merge({}, state);
//       nextState.currentUser = action.currentUser;
//       return nextState;
//     }
//     case RECEIVE_ERRORS: {
//       const nextState = merge({}, state);
//       nextState.errors = action.errors;
//       nextState.currentUser = null;
//       return nextState;
//     }
//     case LOGOUT: {
//       const nextState = merge({}, state);
//       nextState.errors = [];
//       nextState.currentUser = null;
//       return nextState;
//     }
//     default: {
//       return state;
//     }
//   }
// };


export default SessionReducer;
