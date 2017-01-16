let initialState = {
  todos: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(state);
      return {
        todos: [...state.todos, action.text]
      }
    default:
      return state;
  }
};

export default todoApp
