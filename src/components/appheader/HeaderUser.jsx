import React from "react";
import UserActions from "./UserActions";
import UserAvatar from "./UserAvatar";

function HeaderUser({ user }) {
  return (
    <div className="HeaderUser d-flex flex-column">
      <UserAvatar user={user} />
      <UserActions />
    </div>
  );
}

export default HeaderUser;
