import React from "react";
import Task from "./Task";

function TasksList() {
  return (
    <ul className="list-group mt-4">
      <li className="list-group-item">
        <Task />
      </li>
      <li className="list-group-item">
        <Task />
      </li>
      <li className="list-group-item">
        <Task />
      </li>
    </ul>
  );
}

export default TasksList;
