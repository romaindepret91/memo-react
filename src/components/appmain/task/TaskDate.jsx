import React from "react";
import Moment from "react-moment";
import "moment/locale/fr";

function TaskDate({ task }) {
  const date = task.taskDate.toDate();
  const dateFormat = "D MMMM YYYY à HH:mm:ss";
  return (
    <span>
      <Moment format={dateFormat} date={date} locale="fr" />
    </span>
  );
}

export default TaskDate;
