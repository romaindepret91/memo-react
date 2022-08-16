import React, { useState, useEffect } from "react";
import { monitorUserConnection } from "./firebase/user";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import Homepage from "./components/Homepage";
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
      setTasks([{ id: doc.id, ...doc.data() }, ...tasks]);
    });
  }

  function handleDeleteCompletedTasks() {
    deleteCompletedTasks(user.uid);
  }

  function handleChangeTaskStatus(task) {
    upDateTaskStatus(user.uid, task.id, task.taskCompleted);
  }

  function handleDeleteTask(task) {
    deleteTask(user.uid, task.id);
  }

  function handleChangeDisplayMode(e) {
    const taskClasses = e.target.className;
    if (taskClasses.includes("allTasks")) setDisplayMode("all");
    else if (taskClasses.includes("tasksCompleted"))
      setDisplayMode("completed");
    else if (taskClasses.includes("tasksNotCompleted"))
      setDisplayMode("notCompleted");
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
