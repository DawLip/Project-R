import React from 'react';

import { connect } from 'react-redux';
// import {  } from '../../actions';

import './home.sass';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">Hello World</div>
      </>
    );
  }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
