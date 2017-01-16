import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

let TodoList = ({ todos, dispatch }) => {
  return (
     <div>
      {todos.map((todo, i) =>
        <Todo
          key={todo.id}
          onClick={() => dispatch(toggleTodo(todo.id))}
          todo={todo}/>
      )}
    </div>
 );
};

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList);
