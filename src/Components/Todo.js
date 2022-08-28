import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'
// in above we import two icons, we use removeTask , completeTask .. fxns  made in TodoList file  by props
export default function Todo({ todos, completeTask, removeTask }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "complete task-div" : "task-div"}
      key={index}
    >
      <div className="todo-text">{todo.text}</div>
      <div className="icons" key={todo.id}>
        <TiTick
          className={todo.isComplete ? "hide" : "tick"}
          onClick={() => {
            completeTask(todo.id);
          }}
        ></TiTick>
        <RiCloseCircleLine
          className="cross"
          onClick={() => {
            removeTask(todo.id);
          }}
        ></RiCloseCircleLine>
      </div>
    </div>
  ));
}

  // in above  code use for when user  Click on  TiTick icon it mark the task as completed ,
  // and when user Click on CloseCircleLine  (X mark) it remove  it from todolist 
  // for that we call removeTask  fxn of TodoList file  using props
        
