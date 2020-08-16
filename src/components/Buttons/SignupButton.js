import React, { useState } from "react";
import { AuthButtonStyled } from "./styles";
import SignupModal from "../../modals/SignupModal";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <Nav.Link onClick={openModal}>Sign up</Nav.Link>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
