import uuid from 'uuid/v1';

let initialState = {
  todos: []
}

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    console.log(state);
      return {
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
    break;
    default:
      return state;
  }
};

export default todoApp
