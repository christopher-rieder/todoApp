import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoBoard from './TodoBoard/TodoBoard';
import Spinner from './SmallComponents/Spinner';
import {requestTodos} from './TodoBoard/Actions';

const mapStateToProps = state => ({
  loadingState: state.apiReducer.todosListPending,
  errorLoading: state.apiReducer.todosListError
});

function App ({loadingState, errorLoading, dispatch}) {
  useEffect(() => {
    dispatch(requestTodos());
  }, []);

  if (loadingState) {
    return <Spinner />;
  }

  if (errorLoading) {
    return <p>ERROR: {errorLoading}</p>;
  }

  return <TodoBoard />;
}

export default connect(mapStateToProps)(App);
