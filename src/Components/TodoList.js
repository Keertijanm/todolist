import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
export default function TodoList() {
  // in this we create an state array which hold all TO-DOS

  const [todos, setTodos] = useState([]);

  //Add  todo to list
  const addTask = (task) => {
    if (!task.text) {
      return;
    }
    //const oldTask =todos;   todos.push(task); we can write inplace of it above in one line
    const newTodos = [task, ...todos];
    setTodos(newTodos);
  };

  //  fxn Remove to do from list
  const removeTask = id=>{
    let updatedTasks = [...todos].filter(task=>task.id !==id)
    setTodos(updatedTasks)
  }

  // check task  is completed
  const completeTask =id=>{
    // 1st we map it with update task
    let updatedTasks =todos.map(todo=>{
    if(todo.id ===id){
todo.isComplete =true;
    }
    return todo;
  })
   setTodos(updatedTasks)
  
}

  /* here we pass addTask method as props */

  return <div>
      <TodoForm addTask={addTask}></TodoForm>
      < Todo todos ={todos} completeTask={completeTask} removeTask={removeTask}/>
    </div>
  
}
