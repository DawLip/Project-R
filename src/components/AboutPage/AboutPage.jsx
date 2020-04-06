import React from 'react';

import { connect } from 'react-redux';
// import {  } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './aboutPage.sass';

import diceImg from '../../img/about/dice.png';
import fightImg from '../../img/about/fight.png';

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <div className="aboutPage">
          <Nav whichComponent="AboutPage" />
          <main className="aboutPage__main">
            <section className="aboutPage__section">
              <article className="aboutPage__article">
                <h2 className="aboutPage__h2">What’s Project R?</h2>
                <p className="aboutPage__p">
                  Project R is a RPG online platform, made by players for players.
                </p>
                <p className="aboutPage__p">
                  In Project R YOU make your own universe and history, we are giving you tools to do
                  it and platform to play on.
                </p>
                <p className="aboutPage__p">
                  In the future we plan to have a community based workshop where everyone can share
                  their work with others.
                </p>
                <p className="aboutPage__p">
                  We want to give every tools needed to create a RPG universe and play it for free,
                  with premium features - not limiting your creativity.
                </p>
              </article>
              <img src={diceImg} className="aboutPage__img" />
            </section>
            <section className="aboutPage__section">
              <article className="aboutPage__article">
                <h2 className="aboutPage__h2">Core features:</h2>
                <p className="aboutPage__p">
                  You can create custom Campaigns, Characters, Maps and Items.
                </p>
                <p className="aboutPage__p">
                  In game you will have two modes, player and Game Master mode.
                </p>
                <p className="aboutPage__p">
                  In player mode you have access to your stats, items, map and dice roll.
                </p>
                <p className="aboutPage__p">
                  Game Master have additional features like NPC’s stats and items, item and NPC
                  creator.
                </p>
                <p className="aboutPage__p">Combat mode with hit and damage calculation.</p>
                <p className="aboutPage__p">And many more when comunity workshop will be added.</p>
              </article>
              <img src={fightImg} className="aboutPage__img" />
            </section>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
