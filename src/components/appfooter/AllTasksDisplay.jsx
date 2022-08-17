import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

function AllTasksDisplay({ onChangeDisplayMode, displayMode }) {
  return (
    <ButtonGroup>
      <Button
        className="allTasks"
        variant={displayMode === "all" ? "contained" : "outlined"}
        onClick={(e) => onChangeDisplayMode(e)}
      >
        Toutes
      </Button>
      <Button
        className="tasksCompleted"
        variant={displayMode === "completed" ? "contained" : "outlined"}
        onClick={(e) => onChangeDisplayMode(e)}
      >
        Complétées
      </Button>
      <Button
        className="tasksNotCompleted"
        variant={displayMode === "notCompleted" ? "contained" : "outlined"}
        onClick={(e) => onChangeDisplayMode(e)}
      >
        Actives
      </Button>
    </ButtonGroup>
  );
}

export default AllTasksDisplay;
