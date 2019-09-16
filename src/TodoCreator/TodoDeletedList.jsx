import React from 'react';

export default function TodoDeletedList ({title, children}) {
  return (
    <div className='todoDeletedList'>
      <p className='todoDeletedList__title'>{title}</p>
      {children}
    </div>
  );
}
