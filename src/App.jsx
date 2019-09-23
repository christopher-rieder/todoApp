import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoBoard from './TodoBoard/TodoBoard';
import {requestTodos} from './TodoBoard/Actions';

function App ({loadingState, errorLoading, dispatch}) {
  useEffect(() => {
    dispatch(requestTodos());
  }, []);

  return <TodoBoard />;
}

export default connect(null)(App);
