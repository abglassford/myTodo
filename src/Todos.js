import React from 'react';

const Todos = ({ todos, onClick }) =>
  <div>
    <input type="text"/>
    <button onClick={onClick}>add todo</button>
    <ul>
      {todos.map((todo, i) => <li key={i}>{todo}</li>)}
    </ul>
  </div>


export default Todos;
