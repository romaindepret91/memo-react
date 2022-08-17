import React from "react";
import { useContext, useEffect } from "react";
import Task from "./task/Task";
import UserContext from "../../context/userContext";
import TasksContext from "../../context/tasksContext";
import * as tasksActions from "../../firebase/tasks";

function TasksList({
  setTasks,
  displayMode,
  onSortTasks,
  onChangeTaskStatus,
  onDeleteTask,
}) {
  const user = useContext(UserContext);
  const tasks = useContext(TasksContext);

  useEffect(() => {
    tasksActions.getAllTasks(user.uid).then((tasksFS) => {
      setTasks(onSortTasks(tasksFS));
    });
  }, []);

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
