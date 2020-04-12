import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './reducers/index.js';

import Home from './components/Home/Home.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import ChampionPage from './components/ChampionPage/ChampionPage.jsx';
import CampaingPage from './components/CampaingPage/CampaingPage.jsx';

import './style.sass';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={MainPage} />
        <Route path="/champion" component={ChampionPage} />
        <Route path="/campaing" component={CampaingPage} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
