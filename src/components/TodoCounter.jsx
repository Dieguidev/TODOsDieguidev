import React from 'react';

const TodoCounter = ({ completedtodos, totalTodos }) => {
  return (
    <div>
      <h2 className='TodoCounter'>Has completado {completedtodos} de {totalTodos} TODOs</h2>
    </div>
  );
};

export default TodoCounter;