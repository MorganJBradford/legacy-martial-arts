import React from "react";
import LegacyLogo from "../img/legacy-logo.jpg";

function Logo() {
  return (
    <div className="container">
      <img src={LegacyLogo} id="legacyLogo" alt="Legacy Martial Arts Logo"/>
    </div>
  );
}

export default Logo;