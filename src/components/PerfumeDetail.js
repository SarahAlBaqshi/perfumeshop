import React from "react";

//Styles
import { DeleteButtonStyled, DetailWrapper } from "../styles";
const CookieDetail = (props) => {
  const perfume = props.perfume;

  const handleDelete = () => {
    props.deletePerfume(perfume.id);
  };

  return (
    <DetailWrapper>
      <h1> {perfume.name}</h1>
      <img src={perfume.image} alt={perfume.name} />
      <p>{perfume.description}</p>
      <p>{perfume.price}</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </DetailWrapper>
  );
};

export default CookieDetail;
