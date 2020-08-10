import React, { useState } from "react";
import Modal from "react-modal";

//Styles
import { CreateButtonStyled } from "./styles";

//Stores
import shopStore from "../stores/shopStore";

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

const ShopModal = ({ isOpen, closeModal, oldShop }) => {
  const [shop, setShop] = useState(
    oldShop ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setShop({ ...shop, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setShop({ ...shop, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    shopStore[oldShop ? "updateShop" : "createShop"](shop);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>New Shop</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            required
            type="text"
            name="name" //exact name of the argument in shopModal function
            onChange={handleChange}
            value={shop.name}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="file"
            onChange={handleImage}
            className="form-control"
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldShop ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ShopModal;
