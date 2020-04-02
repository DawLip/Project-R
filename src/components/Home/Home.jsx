import React from 'react';

import { connect } from 'react-redux';
// import {  } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './home.sass';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <Nav />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
