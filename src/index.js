import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import './styles/main.scss';
import todoCreatorReducer from './TodoCreator/Reducer';
import todoBoardReducer from './TodoBoard/Reducer';

// const logger = createLogger();
const rootReducer = combineReducers({
  todoCreator: todoCreatorReducer,
  todoBoard: todoBoardReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  ,
  document.getElementById('root'));
