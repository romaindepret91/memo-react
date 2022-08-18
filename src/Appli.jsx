import React, { useState, useEffect } from "react";
import AppFooter from "./components/appfooter/AppFooter";
import AppHeader from "./components/appheader/AppHeader";
import AppMain from "./components/appmain/AppMain";
import Homepage from "./components/homepage/Homepage";
import { TasksProvider } from "./context/tasksContext";
import { UserProvider } from "./context/userContext";
import { monitorUserConnection } from "./firebase/user";
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

  /**
   * Gère l'ajout d'une tâche
   * @param {string} taskName
   * @param {Date} taskDate
   * @param {boolean} taskCompleted
   */
  function handleAddTask(taskName, taskDate, taskCompleted) {
    // fonction asynchrone dans tasks.js
    createTask(user.uid, {
      taskName: taskName,
      taskDate: taskDate,
      taskCompleted: taskCompleted,
    }).then((doc) => {
      setTasks(handleSortTasks([{ id: doc.id, ...doc.data() }, ...tasks]));
    });
  }

  /**
   * Gère la suppression des tâches complétées
   */
  function handleDeleteCompletedTasks() {
    // fonction asynchrone dans tasks.js
    deleteCompletedTasks(user.uid).then((tasksToDelete) => {
      const newTasks = tasks.filter((task) =>
        tasksToDelete.find((t) => t.taskCompleted !== task.taskCompleted)
      );
      setTasks(handleSortTasks(newTasks));
    });
  }

  /**
   * Gère le changement de status d'une tâche (complétée ou non)
   * @param {object} task
   */
  function handleChangeTaskStatus(task) {
    // fonction asynchrone dans tasks.js
    upDateTaskStatus(user.uid, task.id, task.taskCompleted).then((taskId) => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) task.taskCompleted = !task.taskCompleted;
        return task;
      });
      setTasks(handleSortTasks(newTasks));
    });
  }

  /**
   * Gère la suppression d'une tâche
   * @param {object} task
   */
  function handleDeleteTask(task) {
    // fonction asynchrone dans tasks.js
    deleteTask(user.uid, task.id).then((taskId) => {
      setTasks(handleSortTasks(tasks.filter((task) => task.id !== taskId)));
    });
  }

  /**
   * Gère le changement de mode d'affichage des tâches
   * @param {event} e
   */
  function handleChangeDisplayMode(e) {
    const taskClasses = e.target.className;
    if (taskClasses.includes("allTasks")) setDisplayMode("all");
    else if (taskClasses.includes("tasksCompleted"))
      setDisplayMode("completed");
    else if (taskClasses.includes("tasksNotCompleted"))
      setDisplayMode("notCompleted");
  }

  /**
   * Gère l'affichage des tâches non complétées avant celles complétées
   * @param {array} tasks
   * @returns array
   */
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
      <UserProvider value={user}>
        <TasksProvider value={tasks}>
          <AppHeader />
          <AppMain
            setTasks={setTasks}
            displayMode={displayMode}
            onAddTask={handleAddTask}
            onSortTasks={handleSortTasks}
            onChangeTaskStatus={handleChangeTaskStatus}
            onDeleteTask={handleDeleteTask}
          />
          <AppFooter
            tasks={tasks}
            setTasks={setTasks}
            displayMode={displayMode}
            onChangeDisplayMode={handleChangeDisplayMode}
            onDeleteCompletedTasks={handleDeleteCompletedTasks}
          />
        </TasksProvider>
      </UserProvider>
    </div>
  ) : (
    <Homepage />
  );
}
