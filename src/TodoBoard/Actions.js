import data from '../mockData';

export const REQUEST_TODOS_PENDING = 'REQUEST_TODOS_PENDING';
export const REQUEST_TODOS_SUCCESS = 'REQUEST_TODOS_SUCCESS';
export const REQUEST_TODOS_FAILED = 'REQUEST_TODOS_FAILED';
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';

export const requestTodos = () => dispatch => {
  dispatch({type: REQUEST_TODOS_PENDING});
  window.setTimeout(() => dispatch({type: REQUEST_TODOS_SUCCESS, payload: data}), 200);
};

export const changeTodoStatus = (id, status) => ({type: CHANGE_TODO_STATUS, id, status});
