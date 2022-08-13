import React from "react";
import TaskAddForm from "./TaskAddForm";
import TasksList from "./TasksList";

function AppMain({ tasks, setTasks }) {
  return (
    <div className="AppMain mt-4 w-100">
      <TaskAddForm tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default AppMain;
