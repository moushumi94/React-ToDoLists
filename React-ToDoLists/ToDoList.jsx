 import React, { useState } from 'react';

 const ToDoList = (props) =>{

    const[line, setline] = useState(false);
 
    const cutIt = () => {
     setline(true);
 }
  


  return (
      <>
      <div className="todo_style">
      <span onClick={cutIt}>
           <i className="fa fa-times"    />
       </span>
         
      <li style={{ textDecoration : line ? "line-through" : "none"}}>{props.text}</li>
     
     
  </div>
  </>
  );
 }

 export default ToDoList;