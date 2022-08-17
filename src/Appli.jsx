import React, { useState, useEffect } from "react";
import { monitorUserConnection } from "./firebase/user";
import AppFooter from "./components/appfooter/AppFooter";
import AppHeader from "./components/appheader/AppHeader";
import AppMain from "./components/appmain/AppMain";
import Homepage from "./components/homepage/Homepage";
import {
  createTask,
  deleteTask,
  deleteCompletedTasks,
  upDateTaskStatus,
} from "./firebase/tasks";
import "./Appli.scss";

export default function Appli() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [displayMode, setDisplayMode] = useState("all");

  function handleAddTask(taskName, taskDate, taskCompleted) {
    createTask(user.uid, {
      taskName: taskName,
      taskDate: taskDate,
      taskCompleted: taskCompleted,
    }).then((doc) => {
      setTasks(handleSortTasks([{ id: doc.id, ...doc.data() }, ...tasks]));
    });
  }

  function handleDeleteCompletedTasks() {
    deleteCompletedTasks(user.uid).then((tasksToDelete) => {
      const newTasks = tasks.filter((task) =>
        tasksToDelete.find((t) => t.taskCompleted !== task.taskCompleted)
      );
      setTasks(handleSortTasks(newTasks));
    });
  }

  function handleChangeTaskStatus(task) {
    upDateTaskStatus(user.uid, task.id, task.taskCompleted).then((taskId) => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) task.taskCompleted = !task.taskCompleted;
        return task;
      });
      setTasks(handleSortTasks(newTasks));
    });
  }

  function handleDeleteTask(task) {
    deleteTask(user.uid, task.id).then((taskId) => {
      setTasks(handleSortTasks(tasks.filter((task) => task.id !== taskId)));
    });
  }

  function handleChangeDisplayMode(e) {
    const taskClasses = e.target.className;
    if (taskClasses.includes("allTasks")) setDisplayMode("all");
    else if (taskClasses.includes("tasksCompleted"))
      setDisplayMode("completed");
    else if (taskClasses.includes("tasksNotCompleted"))
      setDisplayMode("notCompleted");
  }

  function handleSortTasks(tasks) {
    const allTasksCompleted = tasks.filter(
      (task) => task.taskCompleted === true
    );
    const allTasksNotCompleted = tasks.filter(
      (task) => task.taskCompleted === false
    );
    return [...allTasksNotCompleted, ...allTasksCompleted];
  }

  useEffect(() => {
    monitorUserConnection(setUser);
  }, []);

  return user ? (
    <div className="container-fluid d-flex justify-content-center flex-wrap w-50 p-5">
      <AppHeader user={user} />
      <AppMain
        userId={user.uid}
        tasks={tasks}
        setTasks={setTasks}
        displayMode={displayMode}
        onAddTask={handleAddTask}
        onSortTasks={handleSortTasks}
        onChangeTaskStatus={handleChangeTaskStatus}
        onDeleteTask={handleDeleteTask}
      />
      <AppFooter
        userId={user.uid}
        tasks={tasks}
        setTasks={setTasks}
        displayMode={displayMode}
        onChangeDisplayMode={handleChangeDisplayMode}
        onDeleteCompletedTasks={handleDeleteCompletedTasks}
      />
    </div>
  ) : (
    <Homepage />
  );
}
