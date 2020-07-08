import React from "react";
import { Link } from "react-router-dom";

//Styles
import { PerfumeWrapper } from "../styles";

//Components
import DeleteButton from "./Buttons/DeleteButton";

const PerfumeItem = (props) => {
  const perfume = props.perfume;

  return (
    <PerfumeWrapper>
      <Link to={`/perfumes/${perfume.slug}`}>
        <img alt={perfume.name} src={perfume.image} />
      </Link>
      <p>{props.perfume.name}</p>
      <p className="perfume-price">{props.perfume.price} KD</p>
      <DeleteButton
        perfumeID={perfume.id}
        deletePerfume={props.deletePerfume}
      />{" "}
    </PerfumeWrapper>
  );
};

export default PerfumeItem;
