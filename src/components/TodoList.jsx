import React from 'react';


const TodoList = (props) => {



  return (
    
      <section>
        <ul className='TodoList'>
          {props.children}
        </ul>
      </section>
    
  );
};

export default TodoList;