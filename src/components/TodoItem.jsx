import React from 'react';

const TodoItem = ({todo,clickOnComplete,clickOnDelete}) => {

  



  return (
    <li className='TodoItem' key={todo.text}>
      <span onClick={()=>clickOnComplete(todo.text)} className={`Icon Icon-check ${todo.completed && 'Icon-check--active'}` }>√</span>
      <p className={`TodoItem-p ${todo.completed && 'TodoItem-p--complete'}`}>{todo.text}</p>
      <span onClick={() => clickOnDelete(todo.text)} className="Icon Icon-delete">X</span>
    </li>
  );
};

export default TodoItem;