import React from 'react';
import { connect } from 'react-redux';
import TodoBoard from './TodoBoard/TodoBoard';

function App () {
  return (
    <TodoBoard />
  );
}

export default connect(null)(App);
