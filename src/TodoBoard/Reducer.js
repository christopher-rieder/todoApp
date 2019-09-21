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
  todosPending: true,
  todosError: '',
  filter: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TODOS.PENDING:
      return { ...state, todosPending: true };
    case REQUEST_TODOS.SUCCESS:
      return { ...state, todos: action.payload, todosPending: false };
    case REQUEST_TODOS.FAILED:
      return { ...state, todosError: action.payload, todosPending: false };
    case CHANGE_TODO_STATUS.PENDING:
      return { ...state, todosPending: true };
    case CHANGE_TODO_STATUS.SUCCESS:
      return {...state,
        todos: state.todos.map(todo => todo._id === action.payload._id ? {...todo, status: action.payload.status} : todo)};
    case CHANGE_TODO_STATUS.FAILED:
      return { ...state, todosError: action.payload, todosPending: false };
    case MODIFY_TODO.PENDING:
      return { ...state, todosPending: true };
    case MODIFY_TODO.SUCCESS:
      return {...state,
        todos: state.todos.map(todo => todo._id === action.payload._id ? {...todo, ...action.payload} : todo)};
    case MODIFY_TODO.FAILED:
      return { ...state, todosError: action.payload, todosPending: false };
    case ADD_TODO.PENDING:
      return { ...state, todosPending: true };
    case ADD_TODO.SUCCESS:
      return {...state,
        todos: state.todos.concat(action.payload)};
    case ADD_TODO.FAILED:
      return { ...state, todosError: action.payload, todosPending: false };
    case FILTER_BY_TAG:
      return {...state, filter: action.payload};
    default: return state;
  }
};

export default reducer;
