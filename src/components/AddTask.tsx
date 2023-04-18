import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddTask() {
  return (
    <div className='add-task'>
      <span className='add-task-icon'>
        <FontAwesomeIcon icon={faPlus} />
      </span>
    </div>
  );
}

export default AddTask;
