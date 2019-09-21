import {asyncActionTypeCreator, asyncApiCall, TODOS_RESOURCE} from '../api/backend';

export const REQUEST_TODOS = asyncActionTypeCreator('REQUEST_TODOS');
export const requestTodos = asyncApiCall(REQUEST_TODOS, TODOS_RESOURCE, 'get');

export const CHANGE_TODO_STATUS = asyncActionTypeCreator('CHANGE_TODO_STATUS');
export const changeTodoStatus = asyncApiCall(CHANGE_TODO_STATUS, TODOS_RESOURCE, 'PATCH');

export const FILTER_BY_TAG = 'FILTER_BY_TAG';
export const filterByTag = (tag) => ({type: FILTER_BY_TAG, payload: tag});
export const removeFilter = filterByTag('');
