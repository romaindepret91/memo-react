import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

function AllTasksDisplay() {
  return (
    <ButtonGroup>
      <Button>Toutes</Button>
      <Button>Complétées</Button>
      <Button>Actives</Button>
    </ButtonGroup>
  );
}

export default AllTasksDisplay;
