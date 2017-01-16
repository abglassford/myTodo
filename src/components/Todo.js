import React from 'react';

const Todo = ({ onClick, todo }) => (
  <p
    onClick={onClick}
    style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}
    >
    {todo.text}
  </p>
)

export default Todo;
