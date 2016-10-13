import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
// import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="main-page">
    <div className="header group">
      <h1 className="logo"><Link to="/" className="show-to-index">yowl</Link></h1>
      <div><GreetingContainer /></div>
    </div>
    {children}
  </div>
);

export default App;
