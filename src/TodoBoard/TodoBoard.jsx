// NOTE: the main view is three columns of cards
// the first column is projects not started (to do...)
// the second column is projects in progress (in progress...)
// and the third column is projects completed (done...)

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TodoCardList from './TodoCardList';
import TodoCardItem from './TodoCardItem';
import TodoCreator from '../TodoCreator/TodoCreator';
import {requestTodos, changeTodoStatus} from './Actions';
import {EditButton, DeleteButton, DoneButton, InProgressButton, FabAddButton} from '../SmallComponents/Buttons';
import Modal from '../SmallComponents/Modal';

// string literals defined for using in css style file
const TODO_UI_STYLE = 'todo';
const INPROGRESS_UI_STYLE = 'inprogress';
const DONE_UI_STYLE = 'done';

const mapStateToProps = state => ({
  todos: state.todoBoard.todos,
  statuses: ['To Do', 'In Progress', 'Done', 'Deleted'] // TODO: this needs to be adquired from the backend service
});

function TodoBoard ({todos, statuses, dispatch}) {
  const [TODO, INPROGRESS, DONE, DELETED] = statuses;
  const [displayModal, setDisplayModal] = useState(true);

  useEffect(() => {
    dispatch(requestTodos());
  }, []);

  return (
    <div className='todoBoard'>
      {
        displayModal && <Modal displayModal={displayModal} setDisplayModal={setDisplayModal}>
          {<TodoCreator />}
        </Modal>
      }
      <TodoCardList title={TODO} >
        {todos.filter(todo => todo.status === TODO)
          .map((todo, i) =>
            <TodoCardItem todoListStyle={TODO_UI_STYLE} todo={todo} key={todo.title + i} >
              <EditButton />
              <InProgressButton onClick={() => dispatch(changeTodoStatus(todo.id, INPROGRESS))} />
              <DeleteButton onClick={() => dispatch(changeTodoStatus(todo.id, DELETED))} />
            </TodoCardItem>)
        }
      </TodoCardList>
      <TodoCardList title={INPROGRESS} >
        {todos.filter(todo => todo.status === INPROGRESS)
          .map((todo, i) =>
            <TodoCardItem todoListStyle={INPROGRESS_UI_STYLE} todo={todo} key={todo.title + i} >
              <EditButton />
              <DoneButton onClick={() => dispatch(changeTodoStatus(todo.id, DONE))} />
              <DeleteButton onClick={() => dispatch(changeTodoStatus(todo.id, DELETED))} />
            </TodoCardItem>)
        }
      </TodoCardList>
      <TodoCardList title={DONE} >
        {todos.filter(todo => todo.status === DONE)
          .map((todo, i) =>
            <TodoCardItem todoListStyle={DONE_UI_STYLE} todo={todo} key={todo.title + i} >
              <DeleteButton onClick={() => dispatch(changeTodoStatus(todo.id, DELETED))} />
            </TodoCardItem>)
        }
      </TodoCardList>
      <FabAddButton onClick={() => setDisplayModal(true)} />
    </div>
  );
}

export default connect(mapStateToProps)(TodoBoard);
