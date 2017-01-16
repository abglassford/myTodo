let initialState = {
  todos: []
}

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.todo]
      }
    case 'TOGGLE_TODO':
      console.log('toggleTodo');
      break
    default:
      return state;
  }
};

export default todoApp
