import React from 'react';

const CreateTodoButton = () => {

  const clickCreateButton= () => {
    alert('si funciono')
  }

  return (
    <div>
      <button 
        className='CreateTodoButton'
        onClick={()=> clickCreateButton()}
      >+</button>
    </div>
  );
};

export default CreateTodoButton;