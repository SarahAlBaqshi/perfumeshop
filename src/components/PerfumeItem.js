import React from "react";

//Styles
import { PerfumeWrapper, DeleteButtonStyled } from "../styles";

const PerfumeItem = (props) => {
  const perfume = props.perfume;

  const handleDelete = () => {
    props.deletePerfume(perfume.id);
  };
  return (
    <PerfumeWrapper>
      <img alt={props.perfume.name} src={props.perfume.image} />
      <p>{props.perfume.name}</p>
      <p className="perfume-price">{props.perfume.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </PerfumeWrapper>
  );
};

export default PerfumeItem;
