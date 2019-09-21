import {
  REQUEST_TODOS,
  CHANGE_TODO_STATUS,
  FILTER_BY_TAG
} from './Actions';

import {
  ADD_TODO,
  MODIFY_TODO
} from '../TodoCreator/Actions';

const initialState = {
  todos: [],
  filter: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TODOS.SUCCESS:
      return { ...state, todos: action.payload, todosPending: false };
    case CHANGE_TODO_STATUS.SUCCESS:
      return {...state,
        todos: state.todos.map(todo => todo._id === action.payload._id ? {...todo, status: action.payload.status} : todo)};
    case MODIFY_TODO.SUCCESS:
      return {...state,
        todos: state.todos.map(todo => todo._id === action.payload._id ? {...todo, ...action.payload} : todo)};
    case ADD_TODO.SUCCESS:
      return {...state,
        todos: state.todos.concat(action.payload)};
    case FILTER_BY_TAG:
      return {...state, filter: action.payload};
    default: return state;
  }
};

export default reducer;
