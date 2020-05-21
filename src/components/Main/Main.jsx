import React from 'react';

import { connect } from 'react-redux';
// import {  } from '../../actions';

import Nav from '../common/Nav/Nav.jsx';

import './main.sass';

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="Main">
          <Nav whichComponent="RegisterPage" />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
