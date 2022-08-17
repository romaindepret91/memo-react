import React from "react";
import TaskAddForm from "./TaskAddForm";
import TasksList from "./TasksList";

function AppMain({
  userId,
  tasks,
  setTasks,
  displayMode,
  onAddTask,
  onSortTasks,
  onChangeTaskStatus,
  onDeleteTask,
}) {
  return (
    <div className="AppMain mt-4 w-100">
      <TaskAddForm tasks={tasks} onAddTask={onAddTask} />
      <TasksList
        tasks={tasks}
        userId={userId}
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
