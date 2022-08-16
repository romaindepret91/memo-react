import React from "react";
import TaskChangeStatus from "./TaskChangeStatus";
import TaskName from "./TaskName";
import TaskDate from "./TaskDate";
import TaskDelete from "./TaskDelete";

function Task({ task, onChangeTaskStatus, onDeleteTask }) {
  return (
    <div
      className={
        task.taskCompleted
          ? "Task d-flex align-items-center text-decoration-line-through opacity-50"
          : "Task d-flex align-items-center"
      }
    >
      <TaskChangeStatus task={task} onChangeTaskStatus={onChangeTaskStatus} />
      <TaskName task={task} />
      <TaskDate task={task} />
      <TaskDelete task={task} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default Task;
