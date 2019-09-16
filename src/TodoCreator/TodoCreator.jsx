import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TodoDeletedList from './TodoDeletedList';
import TodoDeletedListItem from './TodoDeletedListItem';
import {EditButton} from '../SmallComponents/Buttons';

const mapStateToProps = state => ({
  todos: state.todoBoard.todos,
  statuses: ['To Do', 'In Progress', 'Done', 'Deleted'] // TODO: this needs to be adquired from the backend service
});

function TodoCreator ({todos, statuses}) {
  const [,,, DELETED] = statuses;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className='todoCreate'>
      <p className='todoCreateTitle'>New Task</p>
      <div className='inputs'>
        <input className='todoCreateTitleInput' value={title} onChange={evt => setTitle(evt.target.value)} type='text' name='title' id='title' placeholder='Titulo/Alias' />
        <input className='todoCreateDescriptionInput' value={description} onChange={evt => setDescription(evt.target.value)} type='text' name='description' id='description' placeholder='Descripcion' />
      </div>
      <button className='btn'>Agregar Tarea</button>
      <TodoDeletedList title='Deleted Tasks'>
        {todos.filter(todo => todo.status === DELETED)
          .map((todo, i) =>
            <TodoDeletedListItem todo={todo} key={todo.title + i} >
              <EditButton />
            </TodoDeletedListItem>)
        }
      </TodoDeletedList>
    </div>
  );
}

export default connect(mapStateToProps)(TodoCreator);
