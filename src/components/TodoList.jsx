import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({searchedTodos, todos, setTodos}) => {

  //eliminando todos
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos= [...todos];
    todos[todoIndex].completed = true
    // todos[todoIndex] ={
    //   text: todos[todoIndex].text,
    //   completed: true,
    // }
  }

  return (
    <div>
      <section>
        <ul className='TodoList'>
          {searchedTodos.map((todo) => (
            <TodoItem key={todo.text}  todo= {todo} completeTodos={completeTodos} todos={todos} setTodos={setTodos}/>))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;