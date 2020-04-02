import React from 'react';

import { connect } from 'react-redux';
// import {  } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './loginPage.sass';

class LoginPage extends React.Component {
  render() {
    return (
      <>
        <div className="loginPage">
          <Nav />
          <main className="loginPage__main">
            <h1 className="loginPage__title">Log In to Project R</h1>
            <section className="loginPage__section">
              <h2 className="loginPage__h2">Username</h2>
              <input type="text" className="loginPage__input" />
            </section>
            <section className="loginPage__section">
              <h2 className="loginPage__h2">Password</h2>
              <input type="password" className="loginPage__input" />
              <p className="loginPage__p">Trouble logging in?</p>
            </section>
            <button className="loginPage__button">Log in</button>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
