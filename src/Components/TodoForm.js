// rfc is shortcut to create functional component 
// In this page we ultimately take the data from user and add it as to-do
import React,{useState} from 'react';
export default function TodoForm(props) {
  // here we use props to use addTask method   made in  TodoList file
  //  above this will update the useState when user starting something in inputState
  const [input, setInput] = useState(""); // so here we keep record of that state
  
  // we have to handle change also create handlechange  fxn
  const handleChange =e=>{
    setInput(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault(); // 1st we have  to prevent reload
    props.addTask({
        id:Math.floor(Math.random() *1000000), //to get unique id
        text:input,
        isComplete:false // to  save status of task
    })
    setInput('') // input back to  this an empty string for new task
}
 
   /* here value will store at our input state 
    and to handle css we use className 
    we use onclick event to  call handlesubmit fxn
    we use onChange event  to  handle change made in input by call handlechange fxn*/
 
  return (
    <div className='my-form'>

    <h1> My To Do List</h1>
    <form className='todo-form'>
      
    
     
      <input type="text" placeholder="Title... "  onChange ={handleChange} className ="todo-input" value={input} name="text"/>

      <button type="submit" onClick={handleSubmit} className="todo-btn">Add</button>
    </form>
    </div>
    
  );
}
