import React from 'react';

import { connect } from 'react-redux';
import { changeActiveInLoginPage, logIn } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';
import RegisterPage from '../RegisterPage/RegisterPage.jsx';

import './loginPage.sass';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    const inputs = ['email', 'password'];

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
              {inputs.map(input => (
                <section className="loginPage__section" key={input}>
                  <h2 className="loginPage__h2">
                    {input.charAt(0).toUpperCase() + input.slice(1)}
                  </h2>
                  <input
                    type={input === 'password' ? 'password' : 'text'}
                    className="loginPage__input"
                    value={this.state[input]}
                    onChange={e => this.setState({ [input]: e.target.value })}
                  />
                </section>
              ))}
              <button
                className="loginPage__btn"
                onClick={() => this.props.logIn(this.state.email, this.state.password)}
              >
                Log in
              </button>
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
const mapDispatchToProps = { changeActiveInLoginPage, logIn };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
