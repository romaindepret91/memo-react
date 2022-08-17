import React from "react";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import Avatar from "@mui/material/Avatar";

function UserAvatar() {
  const user = useContext(UserContext);
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
