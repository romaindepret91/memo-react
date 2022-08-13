import React from "react";
import TextField from "@mui/material/TextField";

function TaskAddForm() {
  return (
    <TextField
      margin="dense"
      id="task"
      label="Ajouter une tâche..."
      type="text"
      fullWidth
      variant="standard"
      //   onChange={}
    />
  );
}

export default TaskAddForm;
