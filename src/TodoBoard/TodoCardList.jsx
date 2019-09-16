import React from 'react';

function TodoCardList ({title, todoListStyle, children}) {
  return (
    <div className='todoCardList'>
      <p className={`todoCardList__title todoCardList__title--${todoListStyle}`}>{title}</p>
      {children}
    </div>
  );
}

export default TodoCardList;
