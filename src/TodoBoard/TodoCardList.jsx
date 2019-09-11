import React from 'react';
import TodoCardItem from './TodoCardItem';

function TodoCardList ({title, todos}) {
  if (!todos || todos.length === 0) {
    return <div className='emptyCardList' />;
  }
  return (
    <div className='todoCardList'>
      <p className='todoCardList__title'>{title}</p>
      {todos.map(todo => <TodoCardItem todo={todo} key={todo.title} />)}
    </div>
  );
}

export default TodoCardList;
