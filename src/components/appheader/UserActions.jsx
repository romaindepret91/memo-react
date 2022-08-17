import React from "react";
import { disconnectUser } from "../../firebase/user";

function UserActions() {
  return (
    <div className="UserActions d-flex mt-3">
      <button
        className="userActions-btn btn btn-outline-dark btn-sm"
        onClick={disconnectUser}
      >
        Déconnexion
      </button>
    </div>
  );
}

export default UserActions;
