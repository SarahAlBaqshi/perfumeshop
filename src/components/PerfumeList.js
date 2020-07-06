import React from "react";

//Components
import PerfumeItem from "./PerfumeItem";

//Styles
import { ListWrapper } from "../styles";

const PerfumeList = (props) => {
  const perfumeList = props.perfumes.map((perfume) => (
    <PerfumeItem
      perfume={perfume}
      deletePerfume={props.deletePerfume}
      handleVisible={props.handleVisible}
      key={perfume.id}
    />
  ));
  return <ListWrapper>{perfumeList}</ListWrapper>;
};

export default PerfumeList;
