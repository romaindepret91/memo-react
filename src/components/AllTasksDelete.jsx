import React from "react";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import * as tasksActions from "../firebase/tasks";

function AllTasksDelete({ displayMode, onDeleteCompletedTasks }) {
  return displayMode === "all" ? (
    <IconButton onClick={onDeleteCompletedTasks}>
      <DeleteIcon sx={{ color: "red" }} />
    </IconButton>
  ) : null;
}

export default AllTasksDelete;
