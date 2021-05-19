import React, { useContext } from "react";
import HomeCarousel from "./HeaderComponents/HomeCarousel";
import LogoLinks from "./HeaderComponents/LogoLinks";
import TopBar from "./HeaderComponents/TopBar";
import { AppContext } from "../AppContext";


function Header() {
  const { mainControl } = useContext(AppContext);

  if (mainControl !== "home") {
    return (
      <>
        <TopBar />
        <LogoLinks />
      </>
    );
  } else {
    return (
      <>
        <TopBar />
        <LogoLinks />
        <HomeCarousel />
      </>
    );
  }
}

export default Header;