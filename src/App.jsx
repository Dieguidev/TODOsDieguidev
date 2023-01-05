import { useState } from 'react'
import React from 'react';
import './App.css'
import CreateTodoButton from './components/CreateTodoButton'
import TodoCounter from './components/TodoCounter'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'
import TodoItem from './components/TodoItem';

function App() {

  const deFaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el curso', completed: false },
    { text: 'Llorar', completed: false },
  ];
  const [todos, setTodos] = useState(deFaultTodos);
  const [searchTodo, setSearchTodo] = useState('');

  const completedtodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  // logica para busqueda de todos
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

  //completaNDO TODOS
  const clickOnComplete = (text) => {
    // alert(`ya completaste el todo ${todo.text}`)
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  //eliminando TODOS
  const clickOnDelete = (text) => {
    // alert(`eliminaste el todo ${todo.text}`)
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>LISTA DE TAREAS</h1>
      <TodoCounter completedtodos={completedtodos} totalTodos={totalTodos} />
      <TodoSearch searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
      {/* <TodoList searchedTodos={searchedTodos} todos={todos} setTodos={setTodos} /> */}
      <TodoList searchedTodos={searchedTodos} todos={todos} setTodos={setTodos}>
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.text} todo={todo} clickOnComplete={clickOnComplete} clickOnDelete={clickOnDelete}/>))}
      </TodoList>
      <CreateTodoButton />
    </div>
  )
}

export default App
