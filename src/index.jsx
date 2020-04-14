import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './reducers/index.js';

import Main from './components/Main/Main.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import StartPage from './components/StartPage/StartPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import ChampionPage from './components/ChampionPage/ChampionPage.jsx';
import CampaingPage from './components/CampaingPage/CampaingPage.jsx';
import GamePage from './components/GamePage/GamePage.jsx';

import './style.sass';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/champion" component={ChampionPage} />
        <Route path="/campaing" component={CampaingPage} />
        <Route path="/game" component={GamePage} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
