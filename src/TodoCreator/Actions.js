import dotenv from 'dotenv';
dotenv.config({path: '../.env'});
const BACKEND_URI = process.env.BACKEND_URI;

export const ADD_TODO_PENDING = 'ADD_TODO_PENDING';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILED = 'ADD_TODO_FAILED';

export const MODIFY_TODO_PENDING = 'MODIFY_TODO_PENDING';
export const MODIFY_TODO_SUCCESS = 'MODIFY_TODO_SUCCESS';
export const MODIFY_TODO_FAILED = 'MODIFY_TODO_FAILED';

export const addTodo = (todo) => dispatch => {
  dispatch({type: ADD_TODO_PENDING});
  window.fetch(`${BACKEND_URI}/todos`, {
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

export const modifyTodo = (_id, todo) => dispatch => {
  dispatch({type: MODIFY_TODO_PENDING});
  window.fetch(`${BACKEND_URI}/todos/${_id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json())
    .then(res => dispatch({type: MODIFY_TODO_SUCCESS, _id: res._id, todo}))
    .catch(error => dispatch({type: MODIFY_TODO_FAILED, payload: error}));
};

export const newTodo = (title, description, status, tags = '') => ({
  title,
  description,
  status,
  tags: tags.split(',').map(tag => tag.trim())
});
