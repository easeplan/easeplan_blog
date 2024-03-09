import { useState } from "react";
import { styled } from "@mui/material/styles";
import Logo from "./Logo";
import { Box, Container } from "@mui/material";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    
    <NavWrapper >
      <MobileNav show={toggleMenu} handleClick={handleClick} />
      <Container maxWidth="xl">
        <Flex>
          <Logo />
          <NavItemWrapper>
            <NavItem href="/" text="Home" />
            <NavItem href="https://www.easeplan.io" text="Find Vendors" />

            <NavItem
              href="https://www.easeplan.io/signup"
              text="Become a vendor"
            />
          </NavItemWrapper>
          <MenuIcon className="menuIcon" onClick={handleClick} />
        </Flex>
        <MobileNav show={toggleMenu} handleClick={handleClick} />
      </Container>
    </NavWrapper>
  );
};

const NavWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#174E64",
  display: "flex",
  alignItems: "center",
  padding: "1rem 0",
  position: "fixed",
  width: "100%",
  zIndex: "10",

  "@media (max-width: 900px)": {
    padding: "0.8rem 0 ",
  },
}));

const Flex = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 4rem",

  "@media (max-width: 1020px)": {
    padding: " 0 ",
  },

  ".menuIcon": {
    color: "#71F79F",
    display: "none",
    cursor: "pointer",

    "@media (max-width: 1020px)": {
      display: "block",
      fontSize: "2rem",
    },
  },
}));

const NavItemWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  
  "@media (max-width: 1020px)": {
    display: "none",
  },
});

export default Navbar;
