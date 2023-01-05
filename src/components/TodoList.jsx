import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {



  return (
    <div>
      <section>
        <ul className='TodoList'>
          {props.children}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;