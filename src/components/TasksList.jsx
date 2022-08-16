import React from "react";
import Task from "./Task";
import { useEffect } from "react";
import * as tasksActions from "../firebase/tasks";

function TasksList({
  userId,
  tasks,
  setTasks,
  displayMode,
  onChangeTaskStatus,
  onDeleteTask,
}) {
  useEffect(() => {
    tasksActions.getAllTasks(userId).then((tasksFS) => {
      const allTasksCompleted = tasksFS.filter(
        (task) => task.taskCompleted === true
      );
      const allTasksNotCompleted = tasksFS.filter(
        (task) => task.taskCompleted === false
      );
      setTasks([...allTasksNotCompleted, ...allTasksCompleted]);
    });
  }, []);

  useEffect(() => {
    tasksActions.getAllTasks(userId).then((tasksFS) => {
      setTasks(tasksFS);
    });
  }, [onDeleteTask]);

  useEffect(() => {
    tasksActions.getAllTasks(userId).then((tasksFS) => {
      const allTasksCompleted = tasksFS.filter(
        (task) => task.taskCompleted === true
      );
      const allTasksNotCompleted = tasksFS.filter(
        (task) => task.taskCompleted === false
      );
      setTasks([...allTasksNotCompleted, ...allTasksCompleted]);
    });
  }, [onChangeTaskStatus]);

  return (
    <ul className="list-group mt-4">
      {tasks.map((task) => {
        let showElt = false;
        if (displayMode === "all") showElt = true;
        else if (displayMode === "completed" && task.taskCompleted)
          showElt = true;
        else if (displayMode === "notCompleted" && !task.taskCompleted)
          showElt = true;
        return (
          <li
            key={task.id}
            id={task.id}
            className={
              showElt ? "Tache list-group-item" : "Tache list-group-item d-none"
            }
          >
            <Task
              task={task}
              onChangeTaskStatus={onChangeTaskStatus}
              onDeleteTask={onDeleteTask}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default TasksList;
