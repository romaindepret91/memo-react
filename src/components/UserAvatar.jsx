import React from "react";
import Avatar from "@mui/material/Avatar";

function UserAvatar({ user }) {
  return (
    <div className="UserAvatar d-flex align-items-center w-100">
      <span className="avatarUsername me-2">{user.displayName}</span>
      <Avatar
        className="avatarImg"
        alt={user.displayName}
        src={user.photoURL}
      />
    </div>
  );
}

export default UserAvatar;
