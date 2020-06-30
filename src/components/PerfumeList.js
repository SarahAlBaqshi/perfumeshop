import React from "react";

//Components
import PerfumeItem from "./PerfumeItem";

//Styles
import styles from "../styles";

//Data
import perfumes from "../perfumes";

const PerfumeList = () => {
  const perfumeList = perfumes.map((perfume) => (
    <PerfumeItem perfume={perfume} key={perfume.id} />
  ));

  return <div style={styles.list}>{perfumeList}</div>;
};
export default PerfumeList;
