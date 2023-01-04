import React from 'react';
import { useState } from 'react';

const TodoSearch = ({searchTodo, setSearchTodo}) => {



  const changeTodoSearch = (e) =>{
    setSearchTodo(e.target.value);
  }

  console.log(searchTodo)
  return (
    <div>
      <input className='TodoSearch' placeholder='Cebolla' 
        value={searchTodo}
        onChange={changeTodoSearch}
      />
    </div>
  );
};

export default TodoSearch;