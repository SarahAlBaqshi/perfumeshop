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

const SigninModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    authStore.signin(user);
    console.log(user);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signin Modal"
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
          <label>Password</label>
          <input
            required
            type="password"
            name="password" //exact name of the argument in userModal function
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
        </div>

        <CreateButtonStyled className="btn float-right">
          Sign in
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default SigninModal;
