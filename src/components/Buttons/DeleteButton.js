import React from "react";
import { DeleteButtonStyled } from "./styles";

//Stores
import perfumeStore from "../../stores/perfumeStore";

const DeleteButton = ({ perfumeID }) => {
  const handleDelete = () => perfumeStore.deletePerfume(perfumeID);

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
