import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {



  return (
    <div>
      <section>
        <ul className='TodoList'>
          {todos.map((todo) => (
            <TodoItem key={todo.text}  todo= {todo}/>))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;