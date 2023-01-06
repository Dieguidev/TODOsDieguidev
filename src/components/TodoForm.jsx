import React from 'react';
import { useState } from 'react';

const TodoForm = ({ addTodo, setOpenModal }) => {

  const [newTopdoValue, setNewTodoValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTopdoValue)
    setOpenModal(false)
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Escribe tu nuevo TODO
      </label>
      <textarea
        value={newTopdoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
        placeholder='Ejm: Tengo que cortar el pan'
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type='button'
          onClick={() => setOpenModal(false)}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type='submit'>
          Añadir
        </button>
      </div>
    </form>
  );
};

export default TodoForm;