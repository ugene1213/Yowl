import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { REQUEST_BUSINESSES, requestBusinesses, requestBusiness, createReview } from './actions/business_actions'; //TESTING
import { fetchBusinesses, fetchBusiness } from './util/business_api_util'; //TESTING
import { toArray } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const initialState = {
        session: {
          currentUser: window.currentUser
        }
      };
      store = configureStore(initialState);
    } else {
      store = configureStore();
    }
    window.store = store;
    window.toArray = toArray;
    window.createReview = createReview;
    window.requestBusinesses = requestBusinesses;
    window.fetchBusinesses = fetchBusinesses;
    window.requestBusiness = requestBusiness;
    window.fetchBusiness = fetchBusiness;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
