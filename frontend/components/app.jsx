import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
// import GreetingContainer from './greeting/greeting_container';

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
          <div className="header group">
            <div className='header-info group'>
              <div className='greeting-logo'>
                <img src='assets/logo.png'/>
                <Link to="/" className="show-to-index" />
              </div>
              <div><GreetingContainer location={props.location} /></div>
            </div>
          </div>
          {props.children}
        </div>
      );
    }
}


export default App;
