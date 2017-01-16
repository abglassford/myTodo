import uuid from 'uuid/v1';

let initialState = {
  todos: []
}

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
            id: uuid()
          }
        ]
      }
    case 'TOGGLE_TODO':
    console.log(state);
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {...todo, completed: !todo.completed}
          } else {
            return {...todo}
          }
        })
      }
    default:
      return state;
  }
};

export default todoApp
