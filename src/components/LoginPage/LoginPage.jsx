import React from 'react';

import { connect } from 'react-redux';
import { changeActiveInLoginPage } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';
import RegisterPage from '../RegisterPage/RegisterPage.jsx';

import './loginPage.sass';

class LoginPage extends React.Component {
  render() {
    return (
      <>
        <div className="loginPage">
          <Nav whichComponent="LoginPage" />
          <nav className="loginPage__nav">
            <ul className="loginPage__ul">
              <li
                className={`loginPage__li 
                ${this.props.gameData.isLogInActive ? 'loginPage__li--active' : ''}`}
                onClick={() => this.props.changeActiveInLoginPage(1)}
              >
                Log In
                <div
                  className={`loginPage__border 
                ${this.props.gameData.isLogInActive ? 'loginPage__border--active' : ''}`}
                ></div>
              </li>
              <li
                className={`loginPage__li 
                ${!this.props.gameData.isLogInActive ? 'loginPage__li--active' : ''}`}
                onClick={() => this.props.changeActiveInLoginPage(2)}
              >
                Sing Up
                <div
                  className={`loginPage__border 
                ${!this.props.gameData.isLogInActive ? 'loginPage__border--active' : ''}`}
                ></div>
              </li>
            </ul>
          </nav>

          <div
            className={`loginPage__mainWrap 
                ${!this.props.gameData.isLogInActive ? 'loginPage__mainWrap--active' : ''}`}
          >
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
              <button className="loginPage__btn">Log in</button>
              <div className="loginPage__margin"></div>
            </main>
            <RegisterPage />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ gameData }) => ({ gameData });
const mapDispatchToProps = { changeActiveInLoginPage };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
