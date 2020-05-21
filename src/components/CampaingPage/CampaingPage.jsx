import React from 'react';

import { connect } from 'react-redux';
import {
  editToggle,
  changeTitle,
  changePlayerName,
  addChampion,
  removeChampion
} from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './campaingPage.sass';

import logo from '../../img/campaing/warhammerLogo.png';
import gm from '../../img/campaing/GM.png';
import defaultImg from '../../img/default.png';

class CampaingPage extends React.Component {
  render() {
    const players = [];
    this.props.gameData.campaing.players.forEach((player, index) => {
      if (this.props.gameData.campaing.isEditMode) {
        players.push(
          <>
            <div className="campaingPage__player">
              <img src={defaultImg} className="campaingPage__img" />
              <input
                type="text"
                className="campaingPage__p campaingPage__input"
                value={player.name}
                onChange={e => this.props.changePlayerName(e.target.value, index)}
              />
              <div
                className="campaingPage__remove"
                onClick={() => this.props.removeChampion(index)}
              >
                <div className="campaingPage__line"></div>
              </div>
            </div>
          </>
        );
      } else {
        players.push(
          <>
            <div className="campaingPage__player">
              <img src={defaultImg} className="campaingPage__img" />
              <p className="campaingPage__p">{player.name}</p>
            </div>
          </>
        );
      }
    });
    return (
      <>
        <div className="campaingPage">
          <Nav />
          {this.props.gameData.campaing.isEditMode ? (
            <>
              <div className="campaingPage__top">
                <section className="campaingPage__about">
                  <input
                    type="text"
                    className="campaingPage__title campaingPage__titleInput"
                    value={this.props.gameData.campaing.name}
                    onChange={e => this.props.changeTitle(e.target.value, 'name')}
                  />
                  <textarea
                    className="campaingPage__h2 campaingPage__h2Input"
                    value={this.props.gameData.campaing.about}
                    onChange={e => this.props.changeTitle(e.target.value, 'about')}
                  ></textarea>
                  <img className="campaingPage__logo" src={logo} />
                </section>

                <aside className="campaingPage__aside">
                  <h1 className="campaingPage__title">Game Master</h1>
                  <div className="campaingPage__gm">
                    <img src={gm} className="campaingPage__img" />
                    <input
                      type="text"
                      className="campaingPage__gmP campaingPage__input"
                      value={this.props.gameData.campaing.gameMasterName}
                      onChange={e => this.props.changeTitle(e.target.value, 'gameMasterName')}
                    />
                  </div>

                  <section className="campaingPage__nextGame">
                    <div className="campaingPage__nextGameMain">
                      <textarea
                        className="campaingPage__h2 campaingPage__h2Input"
                        type="text"
                        value={this.props.gameData.campaing.nextGameDate}
                        onChange={e => this.props.changeTitle(e.target.value, 'nextGameDate')}
                      ></textarea>
                      <button className="campaingPage__btn">Play</button>
                    </div>

                    {this.props.gameData.campaing.isGameMaster && (
                      <div className="campaingPage__additionalButtons">
                        <button className="campaingPage__additionalButton">
                          Create Champion Template
                        </button>
                        <button
                          className="campaingPage__additionalButton"
                          onClick={() => this.props.editToggle()}
                        >
                          Save
                        </button>
                      </div>
                    )}
                  </section>
                </aside>
              </div>
              <main className="campaingPage__main">
                <h2 className="campaingPage__h2">Champions</h2>
                <div className="campaingPage__players">
                  {players}
                  <div
                    className="campaingPage__player campaingPage__addChampion"
                    onClick={() => this.props.addChampion()}
                  >
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              </main>
            </>
          ) : (
            <>
              {' '}
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
                    <p className="campaingPage__gmP">
                      {this.props.gameData.campaing.gameMasterName}
                    </p>
                  </div>

                  <section className="campaingPage__nextGame">
                    <div className="campaingPage__nextGameMain">
                      <h2 className="campaingPage__h2">
                        {this.props.gameData.campaing.nextGameDate}
                      </h2>
                      <button className="campaingPage__btn">Play</button>
                    </div>

                    {this.props.gameData.campaing.isGameMaster && (
                      <div className="campaingPage__additionalButtons">
                        <button className="campaingPage__additionalButton">
                          Create Champion Template
                        </button>
                        <button
                          className="campaingPage__additionalButton"
                          onClick={() => this.props.editToggle()}
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </section>
                </aside>
              </div>
              <main className="campaingPage__main">
                <h2 className="campaingPage__h2">Champions</h2>
                <div className="campaingPage__players">{players}</div>
              </main>
            </>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ gameData }) => ({ gameData });
const mapDispatchToProps = {
  editToggle,
  changeTitle,
  changePlayerName,
  addChampion,
  removeChampion
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaingPage);
