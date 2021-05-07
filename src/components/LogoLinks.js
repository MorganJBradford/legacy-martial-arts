import React from "react";
import LegacyLogo from "../img/legacy-logo.jpg";

function Logo() {
  return (
    <div className="container">
      <img src={LegacyLogo} id="legacyLogo" alt="Legacy Martial Arts Logo"/>
      <div className="linksDiv">
        <ul className="linksList">
          <li className="linksLi">HOME</li>
          <li className="linksLi">ABOUT</li>
          <li className="linksLi">CLASSES</li>
          <li className="linksLi">FAQ</li>
          <li className="linksLi linksLiLast">STUDENTS</li>
        </ul>
      </div>
    </div>
  );
}

export default Logo;