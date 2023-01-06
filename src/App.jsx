import { useState } from 'react'
import React from 'react';
import './App.css'
import CreateTodoButton from './components/CreateTodoButton'
import TodoCounter from './components/TodoCounter'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'
import TodoItem from './components/TodoItem';
import Modal from './modal/Modal';
import TodoForm from './components/TodoForm';


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // const deFaultTodos = [
  //   { text: 'Cortar cebolla', completed: true },
  //   { text: 'Tomar el curso', completed: false },
  //   { text: 'Llorar', completed: false },
  // ];
  const [todos, setTodos] = useState(parsedTodos);
  const [searchTodo, setSearchTodo] = useState('');
  const [openModaL, setOpenModal] = useState(false)

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
  //funcion para persistir nuestros datos en localStorage
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

  //completaNDO TODOS
  const clickOnComplete = (text) => {
    // alert(`ya completaste el todo ${todo.text}`)
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  //eliminando TODOS
  const clickOnDelete = (text) => {
    // alert(`eliminaste el todo ${todo.text}`)
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  
  //añadiendo todos
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos);
  }
  

  return (
    <div className="App">
      <h1>LISTA DE TAREAS</h1>
      <TodoCounter completedtodos={completedtodos} totalTodos={totalTodos} />
      <TodoSearch searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
      {/* <TodoList searchedTodos={searchedTodos} todos={todos} setTodos={setTodos} /> */}
      <TodoList searchedTodos={searchedTodos} todos={todos} setTodos={setTodos}>
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.text} todo={todo} clickOnComplete={clickOnComplete} clickOnDelete={clickOnDelete} />))}
      </TodoList>

      {openModaL && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModaL={openModaL}/>
    </div>
  )
}

export default App
