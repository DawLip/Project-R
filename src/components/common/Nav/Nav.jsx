import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
// import {  } from '../../actions';

import './nav.sass';

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <ul className="nav__ul">
            {this.props.whichComponent === 'LoginPage' ? (
              <>
                <li className="nav__li">
                  <Link className="nav__a" to={`/`}>
                    Start
                  </Link>
                </li>
                <li className="nav__li">
                  <Link className="nav__a" to={`/settings`}>
                    Settings
                  </Link>
                </li>
                <li className="nav__li">
                  <Link className="nav__a" to={`/register`}>
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav__li">
                  <Link className="nav__a" to={`/`}>
                    Start
                  </Link>
                </li>
                <li className="nav__li">
                  <Link className="nav__a" to={`/settings`}>
                    Settings
                  </Link>
                </li>
                <li className="nav__li">
                  <Link className="nav__a" to={`/login`}>
                    Log in
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </>
    );
  }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
