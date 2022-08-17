import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskDelete({ task, onDeleteTask }) {
  return (
    <IconButton onClick={() => onDeleteTask(task)}>
      <DeleteIcon />
    </IconButton>
  );
}

export default TaskDelete;
