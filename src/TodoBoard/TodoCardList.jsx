import React from 'react';

function TodoCardList ({title, children}) {
  return (
    <div className='todoCardList'>
      <p className='todoCardList__title'>{title}</p>
      {children}
    </div>
  );
}

export default TodoCardList;
