import React from 'react';

import { connect } from 'react-redux';
import { isActiveModuleToggle } from '../../actions';

import './modulesPage.sass';

import Nav from '../common/Nav/Nav.jsx';

class ModulesPage extends React.Component {
  render() {
    const activeModules = [];
    const availableModules = [];
    const officialTags = []; //only for availableModules
    const communityTags = []; //only for availableModules

    this.props.gameData.modules.forEach(module => {
      if (module.isActive) activeModules.push(module);
      else availableModules.push(module);
    });

    availableModules.forEach(module => {
      if (module.isOfficial) officialTags.push(...module.tags);
    });
    officialTags.forEach((tag, index) => {
      for (let i = index + 1; i < officialTags.length; i++) {
        if (tag.toLowerCase() === officialTags[i].toLowerCase()) officialTags.splice(i, 1);
      }
    });

    availableModules.forEach(module => {
      if (!module.isOfficial) communityTags.push(...module.tags);
    });
    communityTags.forEach((tag, index) => {
      for (let i = index + 1; i < communityTags.length; i++) {
        if (tag.toLowerCase() === communityTags[i].toLowerCase()) communityTags.splice(i, 1);
      }
    });

    officialTags.sort();
    communityTags.sort();

    return (
      <>
        <div className="modulesPage">
          <Nav whichComponent="ModulesPage" />
          <main className="modulesPage__main">
            <section className="modulesPage__section">
              <h2 className="modulesPage__h2">Active Modules</h2>
              <input type="text" className="modulesPage__input" />

              {activeModules.map(module => (
                <div className="modulesPage__module">
                  <p className="modulesPage__p">{module.name}</p>
                  <i className="fas fa-bars modulesPage__bars"></i>
                  <i
                    className="fas fa-arrow-up modulesPage__arrow modulesPage__arrow--right"
                    onClick={() => this.props.isActiveModuleToggle(module)}
                  ></i>
                </div>
              ))}

              <button className="modulesPage__btn">Save</button>
            </section>

            <section className="modulesPage__section">
              <h2 className="modulesPage__h2">Available Modules</h2>
              <input type="text" className="modulesPage__input" />

              <section className="modulesPage__mainTagSection">
                <div className="modulesPage__mainTag">
                  <p className="modulesPage__p">Official</p>
                  <i className="fas fa-arrow-up modulesPage__arrow modulesPage__arrow--up"></i>
                </div>
                {officialTags.map(tag => (
                  <>
                    <section className="modulesPage__tagSection">
                      <div className="modulesPage__tag">
                        <p className="modulesPage__p">{tag}</p>
                        <i className="fas fa-arrow-up modulesPage__arrow modulesPage__arrow--up"></i>
                      </div>
                      {availableModules.map(module => {
                        if (
                          module.isOfficial &&
                          module.tags.find(
                            moduleTag => moduleTag.toLowerCase() === tag.toLowerCase()
                          )
                        )
                          return (
                            <div className="modulesPage__module">
                              <p className="modulesPage__p">{module.name}</p>
                              <i
                                className="fas fa-arrow-up modulesPage__arrow modulesPage__arrow--left"
                                onClick={() => this.props.isActiveModuleToggle(module)}
                              ></i>
                            </div>
                          );
                      })}
                    </section>
                  </>
                ))}
              </section>

              <section className="modulesPage__mainTagSection">
                <div className="modulesPage__mainTag">
                  <p className="modulesPage__p">Community</p>
                  <i className="fas fa-arrow-up modulesPage__arrow modulesPage__arrow--down"></i>
                </div>
                {communityTags.map(tag => (
                  <>
                    <section className="modulesPage__tagSection">
                      <div className="modulesPage__tag">
                        <p className="modulesPage__p">{tag}</p>
                        <i className="fas fa-arrow-up modulesPage__arrow modulesPage__arrow--up"></i>
                      </div>
                      {availableModules.map(module => {
                        if (
                          !module.isOfficial &&
                          module.tags.find(
                            moduleTag => moduleTag.toLowerCase() === tag.toLowerCase()
                          )
                        )
                          return (
                            <div className="modulesPage__module">
                              <p className="modulesPage__p">{module.name}</p>
                              <i
                                className="fas fa-arrow-up modulesPage__arrow modulesPage__arrow--left"
                                onClick={() => this.props.isActiveModuleToggle(module)}
                              ></i>
                            </div>
                          );
                      })}
                    </section>
                  </>
                ))}
              </section>

              <button className="modulesPage__btn">Go To Workshop</button>
            </section>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ gameData }) => ({ gameData });
const mapDispatchToProps = { isActiveModuleToggle };

export default connect(mapStateToProps, mapDispatchToProps)(ModulesPage);
