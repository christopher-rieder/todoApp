// NOTE: the main view is three columns of cards
// the first column is projects not started (to do...)
// the second column is projects in progress (in progress...)
// and the third column is projects completed (done...)

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoCardList from './TodoCardList';
import {requestTodos} from './Actions';

const mapStateToProps = state => ({
  todos: state.todoBoard.todos,
  statuses: ['To Do', 'In Progress...', 'Done'] // TODO: this needs to be adquired from the backend service
});

function TodoBoard ({todos, statuses, dispatch}) {
  const [TODO, INPROGRESS, DONE] = statuses;

  useEffect(() => {
    dispatch(requestTodos());
  }, []);

  return (
    <div className='todoBoard'>
      <TodoCardList title={TODO} todos={todos.filter(todo => todo.status === TODO)} />
      <TodoCardList title={INPROGRESS} todos={todos.filter(todo => todo.status === INPROGRESS)} />
      <TodoCardList title={DONE} todos={todos.filter(todo => todo.status === DONE)} />
    </div>
  );
}

export default connect(mapStateToProps)(TodoBoard);
