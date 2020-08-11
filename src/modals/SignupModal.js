import React, { useState } from "react";
import Modal from "react-modal";

//Styles
import { CreateButtonStyled } from "./styles";
import authStore from "../stores/authStore";

//Stores

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const SignupModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "vendor",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    authStore.signup(user);
    event.preventDefault();
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signup Modal"
    >
      <h3>New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            required
            type="text"
            name="username" //exact name of the argument in userModal function
            onChange={handleChange}
            value={user.username}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName" //exact name of the argument in userModal function
            onChange={handleChange}
            value={user.firstName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName" //exact name of the argument in userModal function
            onChange={handleChange}
            value={user.lastName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email" //exact name of the argument in userModal function
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            required
            type="text"
            name="password" //exact name of the argument in userModal function
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
        </div>

        <CreateButtonStyled className="btn float-right">
          Sign up
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default SignupModal;
