import React from 'react';

import { connect } from 'react-redux';
import { register } from '../../actions';

import './registerPage.sass';

class RegisterPage extends React.Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  render() {
    const inputs = ['username', 'email', 'password'];
    const { username, email, password } = this.state;
    return (
      <>
        <div className="registerPage">
          <main className="registerPage__main">
            <h1 className="registerPage__title">Join Project R today</h1>
            {inputs.map(input => (
              <section className="loginPage__section" key={input}>
                <h2 className="loginPage__h2">{input.charAt(0).toUpperCase() + input.slice(1)}</h2>
                <input
                  className="loginPage__input"
                  type={input === 'password' ? 'password' : 'text'}
                  value={this.state[input]}
                  onChange={e => this.setState({ [input]: e.target.value })}
                />
              </section>
            ))}
            <button
              className="registerPage__btn"
              onClick={() => this.props.register(username, email, password)}
            >
              Sign Up
            </button>
            <div className="registerPage__margin"></div>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
