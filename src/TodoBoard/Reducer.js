import {
  REQUEST_TODOS_PENDING,
  REQUEST_TODOS_SUCCESS,
  REQUEST_TODOS_FAILED,
  CHANGE_TODO_STATUS
} from './Actions';

const initialState = {
  todos: [],
  todosPending: true,
  todosError: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TODOS_PENDING:
      return { ...state, todosPending: true };
    case REQUEST_TODOS_SUCCESS:
      return { ...state, todos: action.payload, todosPending: false };
    case REQUEST_TODOS_FAILED:
      return { ...state, todosError: action.payload, todosPending: false };
    case CHANGE_TODO_STATUS:
      return {...state,
        todos: state.todos.map(todo => todo.id === action.id ? {...todo, status: action.status} : todo)};
    default: return state;
  }
};

export default reducer;
