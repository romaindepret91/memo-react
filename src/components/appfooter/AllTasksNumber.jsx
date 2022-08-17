import React from "react";

function AllTasksNumber({ tasks, displayMode }) {
  const allTasksNumber = tasks.filter((t) => !t.taskCompleted).length;
  return (
    <span className="AllTasksNumber">
      {displayMode !== "all" ? "" : `${allTasksNumber} tâches restantes`}
    </span>
  );
}

export default AllTasksNumber;
