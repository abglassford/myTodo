import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let TodoList = ({ todos, dispatch }) => {
  let input;

  return (
   <div>
     <form onSubmit={e => {
       e.preventDefault()
       if (!input.value.trim()) {
         return
       }
       dispatch(addTodo(input.value))
       input.value = ''
     }}>
       <input ref={node => {
         input = node
       }} />
       <button type="submit">
         Add Todo
       </button>
     </form>
     <ul>
      {todos.map((todo, i) => <Todo key={todo.id} {...todo}/>)}
     </ul>
   </div>
 );
};

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList);
