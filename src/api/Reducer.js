import {
  REQUEST_TODOS,
  CHANGE_TODO_STATUS,
  FILTER_BY_TAG
} from '../TodoBoard/Actions';

import {
  ADD_TODO,
  MODIFY_TODO
} from '../TodoCreator/Actions';

const initialState = {
  todosListPending: true,
  todosListError: '',
  apiCallPending: false,
  apiCallError: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TODOS.PENDING:
      return {...state, todosListPending: true};
    case REQUEST_TODOS.FAILED:
      return {...state, todosListPending: false, todosListError: action.payload};
    case REQUEST_TODOS.SUCCESS:
      return {...state, todosListPending: false, todosListError: ''};
  }

  if (action.type.endsWith('_PENDING')) {
    return {...state, apiCallPending: true};
  }

  if (action.type.endsWith('_FAILED')) {
    return {...state, apiCallPending: false, apiCallError: action.payload};
  }

  if (action.type.endsWith('_SUCCESS')) {
    return {...state, apiCallPending: false, apiCallError: ''};
  }

  // return the original state if there are no changes
  return state;
};

export default reducer;
