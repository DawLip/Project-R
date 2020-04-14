import React from 'react';

import { connect } from 'react-redux';
import { addCharacter, addCampaign } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './homePage.sass';

import defaultImg from '../../img/default.png';

class HomePage extends React.Component {
  render() {
    const characters = [];
    const campaigns = [];

    this.props.gameData.characters.forEach(character => {
      characters.push(
        <div className="homePage__rectangle">
          <img src={defaultImg} className="homePage__img" />
          <p className="homePage__p">{character.name}</p>
        </div>
      );
    });

    this.props.gameData.campaigns.forEach(campaign => {
      campaigns.push(
        <div className="homePage__rectangle">
          <img src={defaultImg} className="homePage__img" />
          <p className="homePage__p">{campaign.name}</p>
        </div>
      );
    });

    if ((characters.length + 1) % 3 === 2) {
      characters.push(<div className="homePage__rectangle homePage__rectangle--transparent"></div>);
    }

    if ((campaigns.length + 1) % 3 === 2) {
      campaigns.push(<div className="homePage__rectangle homePage__rectangle--transparent"></div>);
    }
    return (
      <>
        <div className="homePage">
          <Nav whichComponent="HomePage" />
          <div className="homePage__wrap">
            <section className="homePage__section">
              <h2 className="homePage__h2">Characters</h2>
              <main className="homePage__sectionMain">
                <div className="homePage__rectangle" onClick={() => this.props.addCharacter()}>
                  <i className="fas fa-plus"></i>
                </div>
                {characters}
              </main>
            </section>

            <div className="homePage__line"></div>

            <section className="homePage__section">
              <h2 className="homePage__h2">Campaigns</h2>
              <main className="homePage__sectionMain">
                <div className="homePage__rectangle" onClick={() => this.props.addCampaign()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
7;
