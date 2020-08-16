import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { observer } from "mobx-react";

//Components
import SignupButton from "./Buttons/SignupButton";
import SigninButton from "./Buttons/SigninButton";

//Stores
import authStore from "../stores/authStore";

//Styles
import { FiLogOut } from "react-icons/fi";
import onlylogo from "../onlylogo.png";
import { ThemeButton, NavStyled, Logo, NavItem } from "../styles";
import ShopModal from "../modals/ShopModal";
import { AuthButtonStyled } from "./Buttons/styles";

const NavBar = ({ currentTheme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <Logo className="navbar-brand" to="/">
          <img src={onlylogo} alt="logo" width="50" />
        </Logo>
        <div className="navbar-nav ml-auto">
          {authStore.user ? (
            <>
              <p>Hello, {authStore.user.username}</p>
              <FiLogOut onClick={authStore.signout} size="2em" color="red" />
            </>
          ) : (
            <>
              {" "}
              <SigninButton />
              <SignupButton />
            </>
          )}

          {authStore.user?.role === "admin" && (
            <>
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
            </>
          )}

          <Link
            className="nav-item"
            to="/"
            style={{ margin: 10, float: "right" }}
          >
            Home
          </Link>

          {authStore.user && !authStore.user.shopSlug && (
            <AuthButtonStyled onClick={openModal}>Create Shop</AuthButtonStyled>
          )}
          <ShopModal isOpen={isOpen} closeModal={closeModal} />
          <ThemeButton className="nav-item" onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark " : "Light "} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default observer(NavBar);
