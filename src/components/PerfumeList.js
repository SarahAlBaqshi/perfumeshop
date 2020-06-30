import React from "react";

//Components
import PerfumeItem from "./PerfumeItem";

//Styles
//import styles from "../styles";
import { ListWrapper } from "../styles";

//Data
import perfumes from "../perfumes";

const PerfumeList = () =>
  perfumes.map((perfume) => <PerfumeItem perfume={perfume} key={perfume.id} />);

export default PerfumeList;
