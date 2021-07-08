import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
const[inputList, setInputList] = useState("");
 const [Items, setItems] = useState([]);
 

 const itemEvent = (event) => {
setInputList(event.target.value);
};

const listOfItems = () => {
    setItems((oldItems) =>{
        return [...oldItems, inputList];
    });
  setInputList("");
};




const removeAll = () => {
  setItems([]);
}

return (
   <>
   <div className="main_div">
     <div className="center_div">
      <br />
      <h1>ToDo List</h1>
      <br />
      <input type="text" placeholder="Add a items" value={inputList} onChange={itemEvent}/>
      
       <button  className="addItems" onClick={listOfItems}> + </button> 
        
      
      
      
      <ol>

      { Items.map((itemval, index) => {
       return  <ToDoList key={index}  text = {itemval} />; 
       
      })}
      </ol>
      <div><button className="showItems" onClick={removeAll}>Remove All</button></div>
      
     </div>
   </div>
   </>
   
  );
}

export default App;