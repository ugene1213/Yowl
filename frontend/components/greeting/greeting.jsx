import React from 'react';
import { Link, hashHistory } from 'react-router';


class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  sessionLinks() {
      return (
        <div>
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
        </div>
      );
  }

  personalGreeting() {
    const {currentUser, logout} = this.props;

    return (
      <div>
        <hgroup className="header-group group">
          <div className="header-user-info">
            <img src= { window.yowlAssets.genericUser } className="user-image" />
            <div className="button-stuff">
              <h2 className="header-name">{currentUser.username}</h2>
              <br/>
              <button className="header-button" onClick={logout}>Log Out</button>
            </div>
          </div>
        </hgroup>
      </div>
    );
  }

  render() {
    const {currentUser, logout} = this.props;

    if (currentUser) {
      return this.personalGreeting(currentUser, logout);
    } else {
      return this.sessionLinks();
    }
  }
}

export default Greeting;
