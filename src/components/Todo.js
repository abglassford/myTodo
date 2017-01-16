import React from 'react';

const Todo = ( {onClick, completed, text} ) => (
  <li
    onClick={onClick}
    >
    {text}
  </li>
)

export default Todo;
