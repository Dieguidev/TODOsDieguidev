import React from 'react';

const CreateTodoButton = ({setOpenModal, openModaL}) => {

  // const clickCreateButton= () => {
  //   setOpenModal(true)
  // }

  return (
    
      <button 
        className='CreateTodoButton'
        onClick={()=> (setOpenModal(!openModaL))}
      >+</button>
    
  );
};

export default CreateTodoButton;