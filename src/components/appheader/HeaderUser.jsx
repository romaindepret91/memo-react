import React from "react";
import UserActions from "./UserActions";
import UserAvatar from "./UserAvatar";

function HeaderUser() {
  return (
    <div className="HeaderUser d-flex flex-column">
      <UserAvatar />
      <UserActions />
    </div>
  );
}

export default HeaderUser;
