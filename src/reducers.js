export default function todos(state = ['take out the trash', 'wash the dishes'], action) {
  switch (action.type) {
    case 'STORE_TODOS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};
