import React from 'react';

import { connect } from 'react-redux';
// import {  } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './registerPage.sass';

class RegisterPage extends React.Component {
  render() {
    return (
      <>
        <div className="registerPage">
          <Nav whichComponent="RegisterPage" />
          <main className="registerPage__main">
            <h1 className="registerPage__title">Join Project R today</h1>
            <section className="registerPage__section">
              <h2 className="registerPage__h2">Username</h2>
              <input type="text" className="registerPage__input" />
            </section>
            <section className="registerPage__section">
              <h2 className="registerPage__h2">Email</h2>
              <input type="text" className="registerPage__input" />
            </section>
            <section className="registerPage__section">
              <h2 className="registerPage__h2">Password</h2>
              <input type="password" className="registerPage__input" />
            </section>
            <button className="registerPage__btn">Sign Up</button>
            <div className="registerPage__margin"></div>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
