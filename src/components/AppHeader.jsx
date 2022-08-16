import React from "react";
import HeaderUser from "./HeaderUser";
import AppLogo from "./AppLogo";

function AppHeader({ user }) {
  return (
    <div className="AppHeader d-flex justify-content-between align-items-center w-100">
      <AppLogo />
      <HeaderUser user={user} />
    </div>
  );
}

export default AppHeader;
