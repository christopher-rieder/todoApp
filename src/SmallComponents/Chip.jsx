import React from 'react';

export default function Chip (props) {
  return (
    <span className='chip' {...props}>{props.children}</span>
  );
}
