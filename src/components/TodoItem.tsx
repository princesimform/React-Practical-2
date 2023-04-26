import React from "react";
import { TodoListItemProps } from "../Types/TodoListItemProps";

function TodoItem({ isCompleted, data }: TodoListItemProps) {
  return (
    <div className={"item" + `${isCompleted ? " item-completed" : ""}`}>
      <div className='todo-name'>
        <p>{data}</p>
      </div>
      <div className='item-complete'>
        <span className='item-complete-btn'></span>
      </div>
    </div>
  );
}
export default TodoItem;
