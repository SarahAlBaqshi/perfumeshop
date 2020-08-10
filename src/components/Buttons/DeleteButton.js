import React from "react";
import { DeleteButtonStyled } from "./styles";

//Stores
import perfumeStore from "../../stores/perfumeStore";
import shopStore from "../../stores/shopStore";

const DeleteButton = ({ perfumeID, shopId }) => {
  const handleDelete = () => {
    if (perfumeID) perfumeStore.deletePerfume(perfumeID);
    else shopStore.deleteShop(shopId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
