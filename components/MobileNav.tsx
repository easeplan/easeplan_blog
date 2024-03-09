import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import NavItem from "./NavItem";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

type MobileNavProp = {
  show: boolean;
  handleClick: () => void;
};

const MobileNav = ({
  show,
  handleClick,
}: MobileNavProp) => {
  return (
    <MobileWrapper
      style={{
        transform: `${show ? "translateX(0%)" : "translateX(-100%)"}`,
        zIndex: "99",
      }}
    >
      <>
      <NavItem href="/" text="Home" />
        <NavItem href="https://www.easeplan.io" text="Find Vendors" />
       
        <NavItem href="https://www.easeplan.io/signup" text="Become a vendor" />
      </>
      <CloseIcon className="menuIcon" onClick={handleClick} />
    </MobileWrapper>
  );
};

const MobileWrapper = styled(Box)(({ theme }) => ({
  background: "#ECFEF2",
  position: "fixed",
  top: "0",
  left: "0",
  height: "100vh",
  transition: "0.3s all ease",
  width: "100%",
  padding: "3rem",
  overflowX: "auto",
  zIndex: "99",

  ".menuIcon": {
    position: "absolute",
    top: "2rem",
    right: "2rem",
    color: "#174E64",
    display: "none",
    cursor: "pointer",

    "@media (max-width: 1020px)": {
      display: "block",
      fontSize: "2rem",
    },
  },

  "@media (min-width: 1020px)": {
    display: "none",
  },
}));

export default MobileNav;
