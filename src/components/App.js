import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import '../styles/App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Todos</h1>
        <AddTodo />
        <TodoList />
      </div>
    );
  };
};

export default connect()(App);
