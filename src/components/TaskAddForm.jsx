import React from "react";
import TextField from "@mui/material/TextField";

function TaskAddForm({ tasks, addTask }) {
  function handleChange(e) {
    if (e.key === "Enter") {
      const date = new Date();
      addTask(tasks.length + 1, e.target.value, date.toDateString());
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
