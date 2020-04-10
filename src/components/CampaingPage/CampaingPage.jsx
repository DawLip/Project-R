import React from 'react';

import { connect } from 'react-redux';
// import {  } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './campaingPage.sass';

import logo from '../../img/campaing/warhammerLogo.png';
import gm from '../../img/campaing/GM.png';

class CampaingPage extends React.Component {
  render() {
    return (
      <>
        <div className="campaingPage">
          <Nav />
          <div className="campaingPage__top">
            <section className="campaingPage__about">
              <h1 className="campaingPage__title">{this.props.gameData.campaing.name}</h1>
              <h2 className="campaingPage__h2">{this.props.gameData.campaing.about}</h2>
              <img className="campaingPage__logo" src={logo} />
            </section>

            <aside className="campaingPage__aside">
              <h1 className="campaingPage__title">Game Master</h1>
              <div className="campaingPage__gm">
                <img src={gm} className="campaingPage__img" />
                <p className="campaingPage__p">{this.props.gameData.campaing.gameMasterName}</p>
              </div>

              <section className="campaingPage__nextGame">
                <div className="campaingPage__nextGameMain">
                  <h2 className="campaingPage__h2">
                    Game is planed for {this.props.gameData.campaing.nextGameDate}
                  </h2>
                  <button className="campaingPage__btn">Play</button>
                </div>

                <div className="campaingPage__additionalButtons">
                  <button className="campaingPage__additionalButton">
                    Create Champion Template
                  </button>
                  <button className="campaingPage__additionalButton">Edit</button>
                </div>
              </section>
            </aside>
          </div>
          <main className="campaingPage__main">
            <h2 className="campaingPage__h2">Champions</h2>
            <div className="campaingPage__players"></div>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ gameData }) => ({ gameData });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CampaingPage);
