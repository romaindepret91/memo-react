import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function AllTasksDelete() {
  return (
    <IconButton>
      <DeleteIcon sx={{ color: "red" }} />
    </IconButton>
  );
}

export default AllTasksDelete;
