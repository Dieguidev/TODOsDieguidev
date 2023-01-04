import { useState } from 'react'
import React from 'react';
import './App.css'
import CreateTodoButton from './components/CreateTodoButton'
import TodoCounter from './components/TodoCounter'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'

function App() {

  const deFaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el curso', completed: false },
    { text: 'Llorar', completed: false },
  ];
  const [todos, setTodos] = useState(deFaultTodos);
  const [searchTodo, setSearchTodo] = useState('');

  const completedtodos = todos.filter(todo => todo.completed === true);


  return (
    <div className="App">
      <h1>LISTA DE TAREAS</h1>
      <TodoCounter />
      <TodoSearch searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
      <TodoList todos={todos} />
      <CreateTodoButton />
    </div>
  )
}

export default App
