import React, { useState } from "react";
import Modal from "react-modal";

//Styles
import { CreateButtonStyled } from "../styles";

//Stores
import perfumeStore from "../stores/perfumeStore";

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

const PerfumeModal = ({ isOpen, closeModal, oldPerfume }) => {
  const [perfume, setPerfume] = useState(
    oldPerfume ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setPerfume({ ...perfume, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    perfumeStore[oldPerfume ? "updatePerfume" : "createPerfume"](perfume);
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
              value={perfume.name}
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
              value={perfume.price}
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
            value={perfume.description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={perfume.image}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldPerfume ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default PerfumeModal;
