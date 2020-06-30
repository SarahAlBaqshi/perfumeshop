import React from "react";

//Styles
import styles from "../styles";

const PerfumeItem = (props) => {
  return (
    <div style={styles.perfume}>
      <img
        style={props.perfume.perfumeImage}
        alt={props.perfume.name}
        src={props.perfume.image}
      />
      <p style={styles.text}>{props.perfume.name}</p>
      <p style={styles.text}>{props.perfume.price} KD</p>
    </div>
  );
};

export default PerfumeItem;
