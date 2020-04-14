import React from 'react';

import { connect } from 'react-redux';
// import {  } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './startPage.sass';

import diceImg from '../../img/start/dice.png';
import fightImg from '../../img/start/fight.png';

class StartPage extends React.Component {
  render() {
    return (
      <>
        <div className="startPage">
          <Nav whichComponent="StartPage" />
          <main className="startPage__main">
            <section className="startPage__section">
              <article className="startPage__article">
                <h2 className="startPage__h2">What’s Project R?</h2>
                <p className="startPage__p">
                  Project R is a RPG online platform, made by players for players.
                </p>
                <p className="startPage__p">
                  In Project R YOU make your own universe and history, we are giving you tools to do
                  it and platform to play on.
                </p>
                <p className="startPage__p">
                  In the future we plan to have a community based workshop where everyone can share
                  their work with others.
                </p>
                <p className="startPage__p">
                  We want to give every tools needed to create a RPG universe and play it for free,
                  with premium features - not limiting your creativity.
                </p>
              </article>
              <img src={diceImg} className="startPage__img" />
            </section>
            <section className="startPage__section">
              <article className="startPage__article">
                <h2 className="startPage__h2">Core features:</h2>
                <p className="startPage__p">
                  You can create custom Campaigns, Characters, Maps and Items.
                </p>
                <p className="startPage__p">
                  In game you will have two modes, player and Game Master mode.
                </p>
                <p className="startPage__p">
                  In player mode you have access to your stats, items, map and dice roll.
                </p>
                <p className="startPage__p">
                  Game Master have additional features like NPC’s stats and items, item and NPC
                  creator.
                </p>
                <p className="startPage__p">Combat mode with hit and damage calculation.</p>
                <p className="startPage__p">And many more when comunity workshop will be added.</p>
              </article>
              <img src={fightImg} className="startPage__img" />
            </section>
          </main>
          <div className="startPage__margin"></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
