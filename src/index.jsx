import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './reducers/index.js';

import Home from './components/Home/Home.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
// import RegisterPage from './components/RegisterPage/RegisterPage.jsx';

import './style.sass';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />} />
        <Route path="/login" component={LoginPage} />} />
        {/* <Route path="/register" component={RegisterPage} />} /> */}
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
