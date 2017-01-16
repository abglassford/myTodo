import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Todos</h1>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  };
};

export default App
