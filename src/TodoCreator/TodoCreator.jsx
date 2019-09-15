import React, { useEffect, useState } from 'react';

export default function TodoCreator (props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className='todoCreate'>
      <p className='todoCreateTitle'>New Task</p>
      <input value={title} onChange={evt => setTitle(evt.target.value)} type='text' name='title' id='title' placeholder='Titulo/Alias' />
      <input value={description} onChange={evt => setDescription(evt.target.value)} type='text' name='description' id='description' placeholder='Descripcion' />
      <button className='btn'>Create Task</button>
    </div>
  );
}
