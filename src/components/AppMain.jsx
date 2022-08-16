import React from "react";
import TaskAddForm from "./TaskAddForm";
import TasksList from "./TasksList";

function AppMain({
  tasks,
  userId,
  initDisplayTasks,
  displayMode,
  handleDeleteTask,
  addTask,
  onChangeTaskStatus,
  onDeleteTask,
}) {
  return (
    <div className="AppMain mt-4 w-100">
      <TaskAddForm tasks={tasks} addTask={addTask} />
      <TasksList
        tasks={tasks}
        userId={userId}
        initDisplayTasks={initDisplayTasks}
        displayMode={displayMode}
        handleDeleteTask={handleDeleteTask}
        onChangeTaskStatus={onChangeTaskStatus}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

export default AppMain;
