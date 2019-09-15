// NOTE: the main view is three columns of cards
// the first column is projects not started (to do...)
// the second column is projects in progress (in progress...)
// and the third column is projects completed (done...)

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoCardList from './TodoCardList';
import TodoCardItem from './TodoCardItem';
import {requestTodos} from './Actions';
import {DeleteButton, DoneButton, InProgressButton} from '../SmallComponents/Buttons';

// string literals defined for using in css style file
const TODO_UI_STYLE = 'todo';
const INPROGRESS_UI_STYLE = 'inprogress';
const DONE_UI_STYLE = 'done';

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
      <TodoCardList title={TODO} >
        {todos.filter(todo => todo.status === TODO)
          .map((todo, i) =>
            <TodoCardItem todoListStyle={TODO_UI_STYLE} todo={todo} key={todo.title + i} >
              <InProgressButton />
              <DeleteButton />
            </TodoCardItem>)
        }
      </TodoCardList>
      <TodoCardList title={INPROGRESS} >
        {todos.filter(todo => todo.status === INPROGRESS)
          .map((todo, i) =>
            <TodoCardItem todoListStyle={INPROGRESS_UI_STYLE} todo={todo} key={todo.title + i} >
              <DoneButton />
              <DeleteButton />
            </TodoCardItem>)
        }
      </TodoCardList>
      <TodoCardList title={DONE} >
        {todos.filter(todo => todo.status === DONE)
          .map((todo, i) =>
            <TodoCardItem todoListStyle={DONE_UI_STYLE} todo={todo} key={todo.title + i} >
              <DeleteButton />
            </TodoCardItem>)
        }
      </TodoCardList>
    </div>
  );
}

export default connect(mapStateToProps)(TodoBoard);
