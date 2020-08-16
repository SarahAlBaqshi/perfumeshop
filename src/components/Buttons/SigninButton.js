import React, { useState } from "react";
import { AuthButtonStyled } from "./styles";
import SigninModal from "../../modals/SigninModal";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <Nav.Link onClick={openModal}>Sign in</Nav.Link>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
