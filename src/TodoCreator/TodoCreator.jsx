import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TodoDeletedList from './TodoDeletedList';
import TodoDeletedListItem from './TodoDeletedListItem';
import {addTodo, newTodo, modifyTodo} from './Actions';

const mapStateToProps = state => ({
  todos: state.todoBoard.todos,
  statuses: ['To Do', 'In Progress', 'Done', 'Deleted'] // TODO: this needs to be adquired from the backend service
});

function TodoCreator ({todos, statuses, dispatch, todo, editTodo, cleanEditState}) {
  const [TODO, /* IN PROGRESS */ , /* DONE */, DELETED] = statuses;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (editTodo) { // modifying existing todo
      setTitle(todo.title);
      setDescription(todo.description);
      setTags(todo.tags.join(', '));
    }
  }, []);

  function resetInputs () {
    setTitle('');
    setDescription('');
    setTags('');
  }

  function btnAddTodo (evt) {
    dispatch(addTodo(newTodo(title, description, TODO, tags)));
    resetInputs();
  }

  function btnModifyTodo (evt) {
    dispatch(modifyTodo({title, description, tags: tags.split(',').map(tag => tag.trim())}, todo._id));
    cleanEditState();
    resetInputs();
  }

  return (
    <div className='todoCreate'>
      {editTodo
        ? <p className='todoCreateTitle'>Modifying existing task</p>
        : <p className='todoCreateTitle'>New Task</p>
      }
      <div className='inputs'>
        <input className='todoCreateTitleInput' value={title} onChange={evt => setTitle(evt.target.value)} type='text' name='title' id='title' placeholder='Titulo/Alias' />
        <textarea className='todoCreateDescriptionInput' value={description} onChange={evt => setDescription(evt.target.value)} name='description' id='description' placeholder='Descripcion' rows='5' cols='50' />
        <input className='todoCreateTagsInput' value={tags} onChange={evt => setTags(evt.target.value)} type='text' name='tags' id='tags' placeholder='Tags separados por coma' />
        {editTodo
          ? <button className='btn' onClick={btnModifyTodo}>Modificar Tarea</button>
          : <button className='btn' onClick={btnAddTodo}>Agregar Tarea</button>
        }
      </div>
      <TodoDeletedList title='Deleted Tasks'>
        {todos.filter(todo => todo.status === DELETED)
          .map((todo, i) =>
            <TodoDeletedListItem todo={todo} key={todo.title + i} />)
        }
      </TodoDeletedList>
    </div>
  );
}

export default connect(mapStateToProps)(TodoCreator);
