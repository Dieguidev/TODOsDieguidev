import { useState } from 'react'
import React from 'react';
import './App.css'
import CreateTodoButton from './components/CreateTodoButton'
import TodoCounter from './components/TodoCounter'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'

function App() {

  const todos = [
    {text: 'Cortar cebolla', completed: true},
    {text: 'Tomar el curso', completed: false},
    {text: 'Llorar', completed: false},
  ];



  return (
    <div className="App">
      <h1>LISTA DE TAREAS</h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList todos={todos}/>
      <CreateTodoButton />
    </div>
  )
}

export default App
