const initialState = {
  apiCallPending: false,
  apiCallError: ''
};

const reducer = (state = initialState, action) => {
  if (action.type.endsWith('_PENDING')) {
    return {...state, apiCallPending: true};
  }

  if (action.type.endsWith('_FAILED')) {
    return {...state, apiCallPending: false, apiCallError: action.payload};
  }

  if (action.type.endsWith('_SUCCESS')) {
    return {...state, apiCallPending: false};
  }

  return state;
};

export default reducer;
