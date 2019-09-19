import {
  REQUEST_TODOS_PENDING,
  REQUEST_TODOS_SUCCESS,
  REQUEST_TODOS_FAILED,
  CHANGE_TODO_STATUS_PENDING,
  CHANGE_TODO_STATUS_SUCCESS,
  CHANGE_TODO_STATUS_FAILED,
  FILTER_BY_TAG
} from './Actions';

import {
  ADD_TODO_PENDING,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED,
  MODIFY_TODO_PENDING,
  MODIFY_TODO_SUCCESS,
  MODIFY_TODO_FAILED
} from '../TodoCreator/Actions';

const initialState = {
  todos: [],
  todosPending: true,
  todosError: '',
  filter: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TODOS_PENDING:
      return { ...state, todosPending: true };
    case REQUEST_TODOS_SUCCESS:
      return { ...state, todos: action.payload, todosPending: false };
    case REQUEST_TODOS_FAILED:
      return { ...state, todosError: action.payload, todosPending: false };
    case CHANGE_TODO_STATUS_PENDING:
      return { ...state, todosPending: true };
    case CHANGE_TODO_STATUS_SUCCESS:
      return {...state,
        todos: state.todos.map(todo => todo._id === action._id ? {...todo, status: action.status} : todo)};
    case CHANGE_TODO_STATUS_FAILED:
      return { ...state, todosError: action.payload, todosPending: false };
    case MODIFY_TODO_PENDING:
      return { ...state, todosPending: true };
    case MODIFY_TODO_SUCCESS:
      return {...state,
        todos: state.todos.map(todo => todo._id === action._id ? {...todo, ...action.todo} : todo)};
    case MODIFY_TODO_FAILED:
      return { ...state, todosError: action.payload, todosPending: false };
    case ADD_TODO_PENDING:
      return { ...state, todosPending: true };
    case ADD_TODO_SUCCESS:
      return {...state,
        todos: state.todos.concat(action.payload)};
    case ADD_TODO_FAILED:
      return { ...state, todosError: action.payload, todosPending: false };
    case FILTER_BY_TAG:
      return {...state, filter: action.payload};
    default: return state;
  }
};

export default reducer;
