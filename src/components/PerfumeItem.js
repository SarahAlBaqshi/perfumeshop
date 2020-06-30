import React from "react";

//Styles
// import styles from "../styles";
import { PerfumeWrapper } from "../styles";

const PerfumeItem = (props) => {
  return (
    <PerfumeWrapper>
      <img alt={props.perfume.name} src={props.perfume.image} />
      <p>{props.perfume.name}</p>
      <p className="perfume-price">{props.perfume.price} KD</p>
    </PerfumeWrapper>
  );
};

export default PerfumeItem;
