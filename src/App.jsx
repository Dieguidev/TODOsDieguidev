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
    { text: 'Tomar el curso', completed: true },
    { text: 'Llorar', completed: false },
  ];
  const [todos, setTodos] = useState(deFaultTodos);
  const [searchTodo, setSearchTodo] = useState('');

  const completedtodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchTodo.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchTodo.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <div className="App">
      <h1>LISTA DE TAREAS</h1>
      <TodoCounter completedtodos={completedtodos} totalTodos={totalTodos} />
      <TodoSearch searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
      <TodoList searchedTodos={searchedTodos} />
      <CreateTodoButton />
    </div>
  )
}

export default App
