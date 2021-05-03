import React from "react";
import Carousel from "./Carousel";
import Links from "./Links";
import Logo from "./Logo";
import TopBar from "./TopBar";

function Header() {
  // TODO: check state slice responsible for Carousel|| hook?
  if (stateCheck) {
    return (
      <>
        <TopBar />
        <Logo />
        <Links />
        <Carousel />
      </>
    );
  } else {
    return (
      <>
        <TopBar />
        <Logo />
        <Links />
      </>
    );
  }
}

export default Header;