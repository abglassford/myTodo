import axios from 'axios';
const domain = "http://localhost:9999";

const storeTodos = (todos) => ({
  type: 'STORE_TODOS',
  payload: todos
});

const getTodos = (dispatch) => {
  axios.get(`${domain}/todos`)
  .then(data => dispatch(storeTodos(data.data)))
};

export { getTodos };
