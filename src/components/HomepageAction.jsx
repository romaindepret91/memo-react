import React from "react";
import googleLogo from "../images/google-logo.png";
import { connectUser } from "../firebase/user";

function HomepageAction() {
  return (
    <div className="HomepageAction">
      <span
        className="google-connection d-flex align-items-center"
        onClick={connectUser}
      >
        <img className="google-logo" src={googleLogo} alt="Logo Google" />
        <span className="google-text">Continuer avec Google</span>
      </span>
    </div>
  );
}

export default HomepageAction;
