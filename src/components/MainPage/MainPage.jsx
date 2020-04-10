import React from 'react';

import { connect } from 'react-redux';
import { addCharacter, addCampaign } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './mainPage.sass';

import defaultImg from '../../img/default.png';

class MainPage extends React.Component {
  render() {
    const characters = [];
    const campaigns = [];

    this.props.gameData.characters.forEach(character => {
      characters.push(
        <div className="mainPage__rectangle">
          <img src={defaultImg} className="mainPage__img" />
          <p className="mainPage__p">{character.name}</p>
        </div>
      );
    });

    this.props.gameData.campaigns.forEach(campaign => {
      campaigns.push(
        <div className="mainPage__rectangle">
          <img src={defaultImg} className="mainPage__img" />
          <p className="mainPage__p">{campaign.name}</p>
        </div>
      );
    });

    if ((characters.length + 1) % 3 === 2) {
      characters.push(<div className="mainPage__rectangle mainPage__rectangle--transparent"></div>);
    }

    if ((campaigns.length + 1) % 3 === 2) {
      campaigns.push(<div className="mainPage__rectangle mainPage__rectangle--transparent"></div>);
    }
    return (
      <>
        <div className="mainPage">
          <Nav whichComponent="MainPage" />
          <div className="mainPage__wrap">
            <section className="mainPage__section">
              <h2 className="mainPage__h2">Characters</h2>
              <main className="mainPage__sectionMain">
                <div className="mainPage__rectangle" onClick={() => this.props.addCharacter()}>
                  <i className="fas fa-plus"></i>
                </div>
                {characters}
              </main>
            </section>

            <div className="mainPage__line"></div>

            <section className="mainPage__section">
              <h2 className="mainPage__h2">Campaigns</h2>
              <main className="mainPage__sectionMain">
                <div className="mainPage__rectangle" onClick={() => this.props.addCampaign()}>
                  <i className="fas fa-plus"></i>
                </div>
                {campaigns}
              </main>
            </section>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ gameData }) => ({ gameData });
const mapDispatchToProps = { addCharacter, addCampaign };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
7;
