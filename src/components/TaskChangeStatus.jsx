import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";

function TaskChangeStatus({ task, onChangeTaskStatus }) {
  return (
    <IconButton className="me-2 " onClick={() => onChangeTaskStatus(task)}>
      <CheckIcon />
    </IconButton>
  );
}

export default TaskChangeStatus;
