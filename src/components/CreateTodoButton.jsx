import React from 'react';

const CreateTodoButton = () => {

  const clickCreateButton= () => {
    alert('si funciono')
  }

  return (
    
      <button 
        className='CreateTodoButton'
        onClick={()=> clickCreateButton()}
      >+</button>
    
  );
};

export default CreateTodoButton;