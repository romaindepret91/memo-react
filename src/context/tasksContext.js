import React from "react";

const TasksContext = React.createContext();
TasksContext.displayName = "TasksContext";

export const TasksProvider = TasksContext.Provider;

export default TasksContext;
