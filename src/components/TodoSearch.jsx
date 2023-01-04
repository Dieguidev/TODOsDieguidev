import React from 'react';
import { useState } from 'react';

const TodoSearch = () => {

  const [ searchTodo , setSearchTodo ] = useState('')

  const changeTodoSearch = (e) =>{
    setSearchTodo(e.target.value);
  }

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