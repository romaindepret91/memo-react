import React from "react";

function TaskName({ task }) {
  return <span className="TaskName w-75">{task.taskName}</span>;
}

export default TaskName;
