import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function AllTasksDelete({ displayMode, onDeleteCompletedTasks }) {
  return displayMode === "all" ? (
    <IconButton onClick={onDeleteCompletedTasks}>
      <DeleteIcon sx={{ color: "red" }} />
    </IconButton>
  ) : null;
}

export default AllTasksDelete;
