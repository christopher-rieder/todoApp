import React from 'react';
import Chip from '../SmallComponents/Chip';
import { connect } from 'react-redux';
import { filterByTag } from './Actions';

function TodoCardItem ({todo, todoListStyle, children, dispatch}) {
  const hasTags = !(todo.tags === [] || todo.tags[0] === '');
  return (
    <div className={'todoCardItem todoCardItem__' + todoListStyle}>
      <p className='todoCardItem__title'>{todo.title}</p>
      <p className='todoCardItem__description'>{todo.description}</p>
      {
        hasTags &&
        <div className='todoCardItem__tags'>{todo.tags.map(tag => <Chip key={tag} onClick={() => dispatch(filterByTag(tag))}>{tag}</Chip>)}</div>
      }
      <div className='todoCardItem__buttons'>
        {children}
      </div>
    </div>
  );
}

export default connect(null)(TodoCardItem);
