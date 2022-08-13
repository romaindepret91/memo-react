import React from "react";
import TaskChangeStatus from "./TaskChangeStatus";
import TaskName from "./TaskName";
import TaskDate from "./TaskDate";
import TaskDelete from "./TaskDelete";

function Task() {
  return (
    <div className="Task d-flex align-items-center">
      <TaskChangeStatus />
      <TaskName />
      <TaskDate />
      <TaskDelete />
    </div>
  );
}

export default Task;
