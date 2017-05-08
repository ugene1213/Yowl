import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './app'
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import BusinessShowContainer from './business/business_show_container';
import SearchContainer from './business/map/search_container';
import ReviewFormContainer from './business/review_form_container';
import SearchField from './business/map/search_field';
import MapPageContainer from './business/map/map_page_container';


const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };


  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <div>
      <Provider store={ store }>
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={ SearchContainer } />
            <Route path='/login' component={SessionFormContainer} onEnter={_redirectIfLoggedIn }/>
            <Route path='/signup' component={SessionFormContainer} onEnter={_redirectIfLoggedIn } />
            <Route path='/business-map/:location' component={MapPageContainer} />
            <Route path='/businesses/:id' component= { BusinessShowContainer } />
            <Route path='/businesses/:id/review' component={ ReviewFormContainer } onEnter={_ensureLoggedIn } />
            <Route path='/search' component={ SearchField } />
          </Route>
        </Router>
      </Provider>
    </div>
  );
};




export default Root;
