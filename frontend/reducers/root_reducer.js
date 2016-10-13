import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BusinessesReducer from './businesses_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  businesses: BusinessesReducer
});

export default RootReducer;
