import {asyncActionTypeCreator, asyncApiCall, TODOS_RESOURCE} from '../api/backend';

export const ADD_TODO = asyncActionTypeCreator('ADD_TODO');
export const MODIFY_TODO = asyncActionTypeCreator('MODIFY_TODO');

export const addTodo = asyncApiCall(ADD_TODO, TODOS_RESOURCE, 'post');
export const modifyTodo = asyncApiCall(MODIFY_TODO, TODOS_RESOURCE, 'PATCH');

export const newTodo = (title, description, status, tags = '') => ({
  title,
  description,
  status,
  tags: tags.split(',').map(tag => tag.trim())
});
