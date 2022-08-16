import React from "react";
import AllTasksDelete from "./AllTasksDelete";
import AllTasksDisplay from "./AllTasksDisplay";
import AllTasksNumber from "./AllTasksNumber";

function AppFooter({
  tasks,
  userId,
  onDisplayTasks,
  displayMode,
  initDisplayTasks,
  onDeleteCompletedTasks,
}) {
  return (
    <div className="AppFooter d-flex justify-content-between align-items-center mt-4 px-3 w-100">
      <AllTasksDisplay
        onDisplayTasks={onDisplayTasks}
        displayMode={displayMode}
      />
      <AllTasksNumber tasks={tasks} displayMode={displayMode} />
      <AllTasksDelete
        userId={userId}
        onDeleteCompletedTasks={onDeleteCompletedTasks}
        initDisplayTasks={initDisplayTasks}
      />
    </div>
  );
}

export default AppFooter;
