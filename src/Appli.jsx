import React, { useState, useEffect } from "react";
import "./Appli.scss";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import data from "./data/data";

export default function Appli() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function addTask(taskId, taskName, taskDate) {
    const task = {
      id: taskId,
      taskName: taskName,
      taskDate: taskDate,
    };
    setTasks([task, ...tasks]);
  }

  return (
    <div className="container-fluid d-flex justify-content-center flex-wrap w-50 p-5">
      <AppHeader />
      <AppMain tasks={tasks} setTasks={setTasks} addTask={addTask} />
      <AppFooter />
    </div>
  );
}
