// material icons
import React from 'react';

export function DeleteButton (props) {
  return (
    <svg {...props} className='deleteButton' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' /><path d='M0 0h24v24H0z' fill='none' /></svg>
  );
}

export function DoneButton (props) {
  return (
    <svg {...props} className='doneButton' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='none' d='M0 0h24v24H0z' /><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' /></svg>
  );
}

export function InProgressButton (props) {
  return (
    <svg {...props} className='inProgressButton' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none' /><path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' /></svg>
  );
}

export function EditButton (props) {
  return (
    <svg {...props} className='editButton' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' /><path d='M0 0h24v24H0z' fill='none' /></svg>
  );
}

export function FabAddButton (props) {
  return (
    <button className='btn fabAddButton' {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' /><path d='M0 0h24v24H0z' fill='none' /></svg>
      <span>Crear Nota</span>
    </button>
  );
}
