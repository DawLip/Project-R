import React from 'react';

import { connect } from 'react-redux';
import {} from '../../actions';

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
                    <p className="profilePage__editP">Duk2123</p>
                    <button className="profilePage__btn">Edit</button>
                  </div>
                </div>

                <div className="profilePage__module">
                  <p className="profilePage__p">E-Mail</p>
                  <div className="profilePage__edit">
                    <p className="profilePage__editP">...</p>
                    <button className="profilePage__btn">Edit</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="profilePage__section">
              <h2 className="profilePage__h2">Change Password</h2>
              <div className="profilePage__rectangle"></div>
            </section>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ gameData }) => ({ gameData });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
