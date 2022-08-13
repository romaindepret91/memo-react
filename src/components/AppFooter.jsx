import React from "react";
import AllTasksDelete from "./AllTasksDelete";
import AllTasksDisplay from "./AllTasksDisplay";
import AllTasksNumber from "./AllTasksNumber";

function AppFooter() {
  return (
    <div className="AppFooter d-flex justify-content-between align-items-center mt-4 px-3 w-100">
      <AllTasksDisplay />
      <AllTasksNumber />
      <AllTasksDelete />
    </div>
  );
}

export default AppFooter;
