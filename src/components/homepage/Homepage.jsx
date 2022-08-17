import React from "react";
import HomepageAction from "./HomepageAction";
import AppLogo from "../AppLogo";

function Homepage() {
  return (
    <div className="Homepage container-fluid d-flex align-items-center flex-column pt-5">
      <AppLogo />
      <h1 className="homepage-title mt-5">Memo</h1>
      <HomepageAction />
    </div>
  );
}

export default Homepage;
