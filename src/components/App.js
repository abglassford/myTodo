import React, { Component } from 'react';
import Todos from './Todos';
import '../styles/App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Todos</h1>
        <Todos />
      </div>
    );
  };
};

export default connect()(App);
