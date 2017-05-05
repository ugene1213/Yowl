import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import SearchField from './business/map/search_field';
const App = (props) => {

    const { pathname } = props.location;
    if (pathname === '/' || pathname === '/signup' || pathname === '/login'  ) {
      return (
        <div>
          {props.children}
        </div>
      );
    } else {
      return (
        <div className="main-page">
          <div className="header">
            <div className='header-info'>
              <div className='greeting-logo'>
                <Link to="/">
                  <img src='assets/logo.png'/>
                </Link>
              </div>
                <SearchField location={props.location}/>
              <div>
                <GreetingContainer location={props.location} />
              </div>
            </div>
          </div>
          {props.children}
        </div>
      );
    }
}


export default App;
