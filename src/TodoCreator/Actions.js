export const ADD_TODO_PENDING = 'ADD_TODO_PENDING';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILED = 'ADD_TODO_FAILED';

export const addTodo = (todo) => dispatch => {
  dispatch({type: ADD_TODO_PENDING});
  window.fetch(`https://topher-autocity-todo.herokuapp.com/api/todos`, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json())
    .then(res => dispatch({type: ADD_TODO_SUCCESS, payload: {_id: res._id, ...todo}}))
    .catch(error => dispatch({type: ADD_TODO_FAILED, payload: error}));
};

export const newTodo = (title, description, status, tags = '') => ({
  title,
  description,
  status,
  tags: tags.split(',').map(tag => tag.trim())
});
