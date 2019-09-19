import React from 'react';

export default function TodoDeletedListItem ({todo, children}) {
  return (
    <div className='todoDeletedListItem'>
      {children}
      <p className='todoDeletedListItem__title'>{todo.title}</p>
      <p className='todoDeletedListItem__description'>{todo.description.slice(0, 100) + ' ...'}</p>
    </div>
  );
}
