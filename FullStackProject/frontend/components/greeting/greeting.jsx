import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <ul className="login-list">
      <li>
        <Link to="/signup" activeClassName="current" className="sign-up">Sign up!</Link>
      </li>
      <li>
        <Link to="/login" activeClassName="current" className="login">Login</Link>
      </li>
    </ul>

  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
		<h2 className="header-name">{currentUser.username}</h2>
		<button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

export default Greeting;
