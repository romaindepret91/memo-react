import React from "react";
import Avatar from "@mui/material/Avatar";

function UserAvatar() {
  return (
    <div className="UserAvatar d-flex align-items-center w-100">
      <span className="avatarUsername me-2">username</span>
      <Avatar className="avatarImg" />
    </div>
  );
}

export default UserAvatar;
