import React from "react";
import { Link } from "react-router-dom";
import onlylogo from "../onlylogo.png";
import { ThemeButton, NavStyled, Logo } from "../styles";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <Logo className="navbar-brand" to="/">
          <img src={onlylogo} alt="logo" width="50" />
        </Logo>
        <div className="navbar-nav ml-auto">
          <Link
            className="nav-item"
            to="/perfumes"
            style={{ margin: 10, float: "right" }}
          >
            Perfumes
          </Link>

          <Link
            className="nav-item"
            to="/"
            style={{ margin: 10, float: "right" }}
          >
            Home
          </Link>
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark " : "Light "} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
