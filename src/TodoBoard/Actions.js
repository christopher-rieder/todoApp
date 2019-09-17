export const REQUEST_TODOS_PENDING = 'REQUEST_TODOS_PENDING';
export const REQUEST_TODOS_SUCCESS = 'REQUEST_TODOS_SUCCESS';
export const REQUEST_TODOS_FAILED = 'REQUEST_TODOS_FAILED';
export const CHANGE_TODO_STATUS_PENDING = 'CHANGE_TODO_STATUS_PENDING';
export const CHANGE_TODO_STATUS_SUCCESS = 'CHANGE_TODO_STATUS_SUCCESS';
export const CHANGE_TODO_STATUS_FAILED = 'CHANGE_TODO_STATUS_FAILED';

export const requestTodos = () => dispatch => {
  dispatch({type: REQUEST_TODOS_PENDING});
  window.fetch(`http://localhost:3000/api/todos`)
    .then(res => res.json())
    .then(res => dispatch({type: REQUEST_TODOS_SUCCESS, payload: res}))
    .catch(error => dispatch({type: REQUEST_TODOS_FAILED, payload: error}));
};

export const changeTodoStatus = (id, status) => dispatch => {
  dispatch({type: CHANGE_TODO_STATUS_PENDING});
  window.fetch(`http://localhost:3000/api/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({status})
  }).then(res => res.json())
    .then(res => dispatch({type: CHANGE_TODO_STATUS_SUCCESS, id, status}))
    .catch(error => console.log(error) && dispatch({type: CHANGE_TODO_STATUS_FAILED, payload: error}));
};
