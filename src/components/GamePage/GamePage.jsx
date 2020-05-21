import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
// import {  } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './gamePage.sass';

import ChampionCard from '../common/ChampionCard/ChampionCard.jsx';

class GamePage extends React.Component {
  render() {
    const npc = [];
    const players = [];

    return (
      <>
        <div className="gamePage">
          <Nav />
          <main className="gamePage__main">
            <aside className="gamePage__aside">
              <h1 className="gamePage__title">NPC</h1>
              <ChampionCard className="gamePage__topPlayer" name="Garią" />
              <div className="gamePage__module"></div>
              <div className="gamePage__module"></div>
              <div className="gamePage__module"></div>
              <Link className="gamePage__btn" to={`/game`}>
                Menage Modules
              </Link>
            </aside>
            <section className="gamePage__mainSection">
              <h2 className="gamePage__h2">NPC</h2>
              <section className="gamePage__section">
                {this.props.gameData.campaing.npc.map((npc, index) => (
                  <div className="gamePage__player">
                    <ChampionCard name={npc.name} />
                  </div>
                ))}
              </section>
              <h2 className="gamePage__h2">Champions</h2>

              <section className="gamePage__section">
                {this.props.gameData.campaing.players.map((player, index) => (
                  <div className="gamePage__player">
                    <ChampionCard name={player.name} />
                  </div>
                ))}
              </section>
            </section>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ gameData }) => ({ gameData });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
