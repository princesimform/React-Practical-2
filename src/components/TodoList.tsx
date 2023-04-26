import React from "react";
import Data from "../data/Data";
import TodoItem from "./TodoItem";

function TodoList() {
  if (Data == undefined || Data.length == 0) {
    return <p>No Data Avaliable</p>;
  }

  return (
    <div className='todo-list'>
      {Data.map((item) => {
        return (
          <TodoItem 
            key={item.id}
            data={item.data}
            isCompleted={item.isCompleted}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
