import React from 'react';

function TodoCardList ({title, todos, todoListStyle, children}) {
  return (
    <div className='todoCardList'>
      <p className='todoCardList__title'>{title}</p>
      {children}
    </div>
  );
}

export default TodoCardList;
