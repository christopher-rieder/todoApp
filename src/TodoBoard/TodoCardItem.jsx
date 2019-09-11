import React from 'react';

function TodoCardItem ({todo}) {
  return (
    <div className='todoCardListItem'>
      <p className='s'>{todo.title}</p>
      <p className='s'>{todo.description}</p>
      <p className='s'>{todo.author.name}</p>
      <p className='s'>{todo.tags.join(', ')}</p>
    </div>
  );
}

export default TodoCardItem;
