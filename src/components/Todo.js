import React from 'react';

const Todo = ( {onClick, todo} ) => (
  <li>
    {todo.text}
  </li>
)

export default Todo;
