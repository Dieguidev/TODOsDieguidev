import React from 'react';

const TodoItem = ({todo,todos,setTodos}) => {

  const clickOnComplete = (text) => {
    // alert(`ya completaste el todo ${todo.text}`)
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const clickOnCancel = () => {
    alert(`eliminaste el todo ${todo.text}`)
  }

  return (
    <li className='TodoItem' key={todo.text}>
      <span onClick={()=>clickOnComplete(todo.text)} className={`Icon Icon-check ${todo.completed && 'Icon-check--active'}` }>√</span>
      <p className={`TodoItem-p ${todo.completed && 'TodoItem-p--complete'}`}>{todo.text}</p>
      <span onClick={() => clickOnCancel()} className="Icon Icon-delete">X</span>
    </li>
  );
};

export default TodoItem;