import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BusinessesReducer from './businesses_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  businesses: BusinessesReducer,
  errors: ErrorsReducer
});

export default RootReducer;
