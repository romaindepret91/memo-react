import React from "react";
import TaskChangeStatus from "./TaskChangeStatus";
import TaskName from "./TaskName";
import TaskDate from "./TaskDate";
import TaskDelete from "./TaskDelete";

function Task({ taskName, taskDate }) {
  return (
    <div className="Task d-flex align-items-center">
      <TaskChangeStatus />
      <TaskName taskName={taskName} />
      <TaskDate taskDate={taskDate} />
      <TaskDelete />
    </div>
  );
}

export default Task;
