import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    console.log("this should only print once");
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
    window.store = store; //remove later
    const root = document.createElement('main');
    debugger
    document.body.appendChild(root);
    ReactDOM.render(<Root store={store}/>, root);
});
