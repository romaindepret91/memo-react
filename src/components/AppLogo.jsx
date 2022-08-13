import React from "react";
import appLogo from "../images/app-logo.png";

function AppLogo() {
  return (
    <div className="appLogo w-25">
      <img className="img-fluid" src={appLogo} alt="logo" />
    </div>
  );
}

export default AppLogo;
