import React, { Component } from 'react';
import Todos from './Todos';
import './styles/App.css';
import reducer from './reducers';
import { createStore } from 'redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, devTools);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Todos</h1>
        <Todos
          onClick={() => console.log('hey')}
          todos={store.getState()}
          />
      </div>
    );
  };
};

export default App;
