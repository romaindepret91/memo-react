import React, { useState } from "react";
import "./Appli.scss";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

export default function Appli() {
  const [tasks, setTasks] = useState({});
  return (
    <div className="container-fluid d-flex justify-content-center flex-wrap w-50 p-5">
      <AppHeader />
      <AppMain tasks={tasks} setTasks={setTasks} />
      <AppFooter />
    </div>
  );
}
