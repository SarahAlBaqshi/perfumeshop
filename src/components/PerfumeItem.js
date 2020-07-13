import React from "react";
import { Link } from "react-router-dom";

//Styles
import { PerfumeWrapper } from "../styles";

//Components
import DeleteButton from "./Buttons/DeleteButton";

const PerfumeItem = ({ perfume, deletePerfume }) => {
  return (
    <PerfumeWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/perfumes/${perfume.slug}`}>
        <img alt={perfume.name} src={perfume.image} />
      </Link>
      <p>{perfume.name}</p>
      <p className="perfume-price">{perfume.price} KD</p>
      <DeleteButton perfumeID={perfume.id} deletePerfume={deletePerfume} />{" "}
    </PerfumeWrapper>
  );
};

export default PerfumeItem;
