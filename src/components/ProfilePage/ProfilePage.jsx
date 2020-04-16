import React from 'react';

import { connect } from 'react-redux';
import {
  editEmailToggle,
  editUsernameToggle,
  changeProfileData,
  saveUsername,
  changePassword
} from '../../actions';

import './profilePage.sass';

import Nav from '../common/Nav/Nav.jsx';

import defaultImg from '../../img/default.png';

class ProfilePage extends React.Component {
  render() {
    return (
      <>
        <div className="profilePage">
          <Nav whichComponent="ProfilePage" />
          <main className="profilePage__main">
            <section className="profilePage__section">
              <h2 className="profilePage__h2">Profie picture</h2>
              <div className="profilePage__picture">
                <img src={defaultImg} className="profilePage__img" />
                <button className="profilePage__upload">Upload</button>
              </div>
            </section>

            <section className="profilePage__section">
              <h2 className="profilePage__h2">Account Settings</h2>
              <div className="profilePage__rectangle">
                <div className="profilePage__module">
                  <p className="profilePage__p">Name</p>
                  <div className="profilePage__edit">
                    {this.props.gameData.isUsernameEditing ? (
                      <>
                        <input
                          type="text"
                          className="profilePage__editP profilePage__input"
                          value={this.props.gameData.newUsername}
                          onChange={e =>
                            this.props.changeProfileData(e.target.value, 'newUsername')
                          }
                        />
                        <button
                          className="profilePage__btn"
                          onClick={() => this.props.saveUsername()}
                        >
                          Save
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="profilePage__editP">{this.props.gameData.username}</p>
                        <button
                          className="profilePage__btn"
                          onClick={() => this.props.editUsernameToggle()}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="profilePage__module">
                  <p className="profilePage__p">E-Mail</p>
                  <div className="profilePage__edit">
                    <p className="profilePage__editP">...</p>
                    <button
                      className="profilePage__btn"
                      onClick={() => this.props.editEmailToggle()}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="profilePage__section">
              <h2 className="profilePage__h2">Change Password</h2>
              <div className="profilePage__rectangle">
                <div className="profilePage__module">
                  <p className="profilePage__p">Current Password</p>
                  <div className="profilePage__edit">
                    <input
                      type="password"
                      className="profilePage__password profilePage__input"
                      value={this.props.gameData.currentPassword}
                      onChange={e =>
                        this.props.changeProfileData(e.target.value, 'currentPassword')
                      }
                    />
                  </div>
                </div>

                <div className="profilePage__module">
                  <p className="profilePage__p">New Password</p>
                  <div className="profilePage__edit">
                    <input
                      type="password"
                      className="profilePage__password profilePage__input"
                      value={this.props.gameData.newPassword}
                      onChange={e => this.props.changeProfileData(e.target.value, 'newPassword')}
                    />
                  </div>
                </div>

                <div className="profilePage__module">
                  <p className="profilePage__p">Confirm New Password</p>
                  <div className="profilePage__edit">
                    <input
                      type="password"
                      className="profilePage__password profilePage__input"
                      value={this.props.gameData.newPassword2}
                      onChange={e => this.props.changeProfileData(e.target.value, 'newPassword2')}
                    />
                  </div>
                </div>
                <p className="profilePage__error">{this.props.gameData.errorText}</p>
                <button className="profilePage__submit" onClick={() => this.props.changePassword()}>
                  Submit
                </button>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ gameData }) => ({ gameData });
const mapDispatchToProps = {
  editEmailToggle,
  editUsernameToggle,
  changeProfileData,
  saveUsername,
  changePassword
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
