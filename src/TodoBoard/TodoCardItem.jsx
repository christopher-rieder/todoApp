import React from 'react';

function TodoCardItem ({todo}) {
  return (
    <div className='todoCardItem'>
      <p className='todoCardItem__title'>{todo.title}</p>
      <p className='todoCardItem__description'>{todo.description}</p>
      <p className='todoCardItem__author'>{todo.author.name}</p>
      <p className='todoCardItem__tags'>{todo.tags.join(', ')}</p>
    </div>
  );
}

export default TodoCardItem;
