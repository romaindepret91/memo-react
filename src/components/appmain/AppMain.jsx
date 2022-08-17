import React from "react";
import TaskAddForm from "./TaskAddForm";
import TasksList from "./TasksList";

function AppMain({
  setTasks,
  displayMode,
  onAddTask,
  onSortTasks,
  onChangeTaskStatus,
  onDeleteTask,
}) {
  return (
    <div className="AppMain mt-4 w-100">
      <TaskAddForm onAddTask={onAddTask} />
      <TasksList
        setTasks={setTasks}
        displayMode={displayMode}
        onSortTasks={onSortTasks}
        onChangeTaskStatus={onChangeTaskStatus}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

export default AppMain;
