import React, { useState } from "react";
import Modal from "react-modal";

//Styles
import { CreateButtonStyled } from "../styles";

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

const PerfumeModal = ({ isOpen, closeModal, createPerfume }) => {
  const [perfume, setPerfume] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setPerfume({ ...perfume, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(perfume);
    createPerfume(perfume);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>New Perfume</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              type="text"
              name="name" //exact name of the argument in perfumeModal function
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              type="number"
              min="1"
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default PerfumeModal;
