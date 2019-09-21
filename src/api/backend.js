import dotenv from 'dotenv';
dotenv.config({path: '../.env'});
const BACKEND_URI = process.env.BACKEND_URI;

// rest api resources
export const TODOS_RESOURCE = 'todos';

export const asyncActionTypeCreator = (action) => ({
  PENDING: action + '_PENDING',
  SUCCESS: action + '_SUCCESS',
  FAILED: action + '_FAILED'
});

export const asyncApiCall = (action, apiPath, apiMethod) => (body, id = '') => dispatch => {
  const path = id
    ? `${BACKEND_URI}/${apiPath}/${id}`
    : `${BACKEND_URI}/${apiPath}`;

  dispatch({type: action.PENDING});
  window.fetch(path, {
    method: apiMethod,
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
    .then(res => {
      if (apiMethod === 'get') {
        dispatch({type: action.SUCCESS, payload: res});
      } else {
        dispatch({type: action.SUCCESS, payload: {_id: res._id, ...body}});
      }
    })
    .catch(error => dispatch({type: action.FAILED, payload: error}));
};
