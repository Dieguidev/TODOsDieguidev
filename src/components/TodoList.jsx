import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({searchedTodos}) => {



  return (
    <div>
      <section>
        <ul className='TodoList'>
          {searchedTodos.map((todo) => (
            <TodoItem key={todo.text}  todo= {todo}/>))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;