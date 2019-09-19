// NOTE: the main view is three columns of cards
// the first column is projects not started (to do...)
// the second column is projects in progress (in progress...)
// and the third column is projects completed (done...)

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TodoCardList from './TodoCardList';
import TodoCardItem from './TodoCardItem';
import TodoCreator from '../TodoCreator/TodoCreator';
import {requestTodos, changeTodoStatus, removeFilter} from './Actions';
import {EditButton, DeleteButton, DoneButton, InProgressButton, FabAddButton, FabRemoveFiltersButton} from '../SmallComponents/Buttons';
import Modal from '../SmallComponents/Modal';

// string literals defined for using in css style file
const TODO_UI_STYLE = 'todo';
const INPROGRESS_UI_STYLE = 'inprogress';
const DONE_UI_STYLE = 'done';
const mapStateToProps = state => ({
  todos: state.todoBoard.filter === ''
    ? state.todoBoard.todos
    : state.todoBoard.todos.filter(todo => todo.tags.includes(state.todoBoard.filter)),
  hasFilter: state.todoBoard.filter !== '',
  statuses: ['To Do', 'In Progress', 'Done', 'Deleted'] // TODO: this needs to be adquired from the backend service
});

function TodoBoard ({todos, statuses, hasFilter, dispatch}) {
  const [TODO, INPROGRESS, DONE, DELETED] = statuses;
  const [displayModal, setDisplayModal] = useState(false);
  const [editTodo, setEditTodo] = useState(false);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    dispatch(requestTodos());
  }, []);

  function onClickEdit (todo) {
    return event => {
      setEditTodo(true);
      setTodo(todo);
      setDisplayModal(true);
    };
  }

  return (
    <div className='todoBoard'>
      {
        displayModal && <Modal displayModal={displayModal} setDisplayModal={setDisplayModal}>
          {<TodoCreator todo={todo} editTodo={editTodo} />}
        </Modal>
      }
      <TodoCardList todoListStyle={TODO_UI_STYLE} title={TODO} >
        {todos.filter(todo => todo.status === TODO)
          .map((todo, i) =>
            <TodoCardItem todoListStyle={TODO_UI_STYLE} todo={todo} key={todo.title + i} >
              <EditButton onClick={onClickEdit(todo)} />
              <InProgressButton onClick={() => dispatch(changeTodoStatus(todo._id, INPROGRESS))} />
              <DeleteButton onClick={() => dispatch(changeTodoStatus(todo._id, DELETED))} />
            </TodoCardItem>)
        }
      </TodoCardList>
      <TodoCardList todoListStyle={INPROGRESS_UI_STYLE} title={INPROGRESS} >
        {todos.filter(todo => todo.status === INPROGRESS)
          .map((todo, i) =>
            <TodoCardItem todoListStyle={INPROGRESS_UI_STYLE} todo={todo} key={todo.title + i} >
              <EditButton onClick={onClickEdit(todo)} />
              <DoneButton onClick={() => dispatch(changeTodoStatus(todo._id, DONE))} />
              <DeleteButton onClick={() => dispatch(changeTodoStatus(todo._id, DELETED))} />
            </TodoCardItem>)
        }
      </TodoCardList>
      <TodoCardList todoListStyle={DONE_UI_STYLE} title={DONE} >
        {todos.filter(todo => todo.status === DONE)
          .map((todo, i) =>
            <TodoCardItem todoListStyle={DONE_UI_STYLE} todo={todo} key={todo.title + i} >
              <DeleteButton onClick={() => dispatch(changeTodoStatus(todo._id, DELETED))} />
            </TodoCardItem>)
        }
      </TodoCardList>
      <div className='bottomButtons'>
        { hasFilter && <FabRemoveFiltersButton onClick={() => dispatch(removeFilter)} /> }
        <FabAddButton onClick={() => setDisplayModal(true)} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(TodoBoard);
