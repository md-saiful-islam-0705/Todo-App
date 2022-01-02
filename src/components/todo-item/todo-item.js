import React from 'react';

import './todo-item.css';

export const TodoItem = ({ label, complete, onDelete,onEdit, onComplete }) => {
  let classNames = 'todo-item';
  if (complete) {
    classNames += ' todo-item--complete';
  }
  return (
    <li className={classNames}>
      <p className="todo-item__label" onClick={onComplete}>
        {label}
      </p>
      <button
        className="todo-item__delete"
        type="button"
        onClick={onDelete}>Delete
      </button>
     
    </li>
  );
};
