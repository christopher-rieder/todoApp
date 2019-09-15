import React from 'react';

function TodoCardItem ({todo, todoListStyle, children}) {
  return (
    <div className={'todoCardItem todoCardItem__' + todoListStyle}>
      <p className='todoCardItem__title'>{todo.title}</p>
      <p className='todoCardItem__description'>{todo.description}</p>
      <p className='todoCardItem__author'>{todo.author.name}</p>
      <p className='todoCardItem__tags'>{todo.tags.join(', ')}</p>
      <div className='todoCardItem__buttons'>
        {children}
      </div>
    </div>
  );
}

export default TodoCardItem;
