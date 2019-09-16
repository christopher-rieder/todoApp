import React from 'react';

export default function TodoDeletedListItem ({todo, children}) {
  return (
    <div className='todoDeletedListItem'>
      {children}
      <p className='todoDeletedListItem__title'>{todo.title}</p>
    </div>
  );
}
