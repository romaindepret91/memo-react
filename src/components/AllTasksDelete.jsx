import React from "react";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import * as tasksActions from "../firebase/tasks";

function AllTasksDelete({ userId, onDeleteCompletedTasks, initDisplayTasks }) {
  useEffect(
    () => () =>
      tasksActions.getAllTasks(userId).then((tasksFS) => {
        initDisplayTasks(tasksFS);
      }),
    [onDeleteCompletedTasks]
  );
  return (
    <IconButton onClick={onDeleteCompletedTasks}>
      <DeleteIcon sx={{ color: "red" }} />
    </IconButton>
  );
}

export default AllTasksDelete;
