export const ADD_TODO_PENDING = 'ADD_TODO_PENDING';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILED = 'ADD_TODO_FAILED';

export const addTodo = (todo) => dispatch => {
  dispatch({type: ADD_TODO_PENDING});
  window.setTimeout(() => dispatch({type: ADD_TODO_SUCCESS, payload: todo}), 200);
};

export const newTodo = (title, description, status, tags = '') => ({
  title,
  description,
  status,
  author: {name: 'Christopher Rieder'},
  tags: tags.split(',').map(tag => tag.trim())
});
