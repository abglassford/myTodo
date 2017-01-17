import React, { Component } from 'react';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Todos</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  };
};

export default App
