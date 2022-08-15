import React from "react";
import Task from "./Task";

function TasksList({ tasks }) {
  return (
    <ul className="list-group mt-4">
      {tasks.map((task) => (
        <li key={task.id} id={task.id} className="list-group-item">
          <Task taskName={task.taskName} taskDate={task.taskDate} />
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
