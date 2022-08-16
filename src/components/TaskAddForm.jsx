import React from "react";
import TextField from "@mui/material/TextField";

function TaskAddForm({ onAddTask }) {
  function handleChange(e) {
    if (e.key === "Enter") {
      const date = new Date();
      onAddTask(e.target.value, date, false);
      e.target.value = "";
    }
  }

  return (
    <TextField
      margin="dense"
      id="task"
      label="Ajouter une tâche..."
      type="text"
      fullWidth
      variant="standard"
      onKeyDown={handleChange}
    />
  );
}

export default TaskAddForm;
