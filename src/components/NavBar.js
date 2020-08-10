import React from "react";
import { Link, NavLink } from "react-router-dom";
import onlylogo from "../onlylogo.png";
import { ThemeButton, NavStyled, Logo, NavItem } from "../styles";
import SignupButton from "./Buttons/SignupButton";
import SigninButton from "./Buttons/SigninButton";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <Logo className="navbar-brand" to="/">
          <img src={onlylogo} alt="logo" width="50" />
        </Logo>
        <div className="navbar-nav ml-auto">
          {authStore.user ? (
            <p>Hello, {authStore.user.username}</p>
          ) : (
            <>
              {" "}
              <SigninButton />
              <SignupButton />
            </>
          )}
          <NavItem className="nav-item" to="/shops">
            Shops
          </NavItem>
          <NavItem
            className="nav-item"
            to="/perfumes"
            style={{ margin: 10, float: "right" }}
          >
            Perfumes
          </NavItem>

          <Link
            className="nav-item"
            to="/"
            style={{ margin: 10, float: "right" }}
          >
            Home
          </Link>

          <ThemeButton className="nav-item" onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark " : "Light "} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default observer(NavBar);
