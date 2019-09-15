import React from 'react';
import TodoCardItem from './TodoCardItem';

function TodoCardList ({title, todos, todoListStyle}) {
  if (!todos || todos.length === 0) {
    return <div className='emptyCardList' />;
  }
  return (
    <div className='todoCardList'>
      <p className='todoCardList__title'>{title}</p>
      {todos.map((todo, i) => <TodoCardItem todoListStyle={todoListStyle} todo={todo} key={todo.title + i} />)}
    </div>
  );
}

export default TodoCardList;
