import React, { useState } from "react";

//Components
import PerfumeItem from "./PerfumeItem";

//Data
import perfumes from "../perfumes";

//Styles
import { ListWrapper } from "../styles";

const PerfumeList = () => {
  const [_perfumes, setPerfumes] = useState(perfumes);
  const deletePerfume = (perfumeID) => {
    const updatedPerfumes = _perfumes.filter(
      (perfume) => perfume.id !== perfumeID
    );
    setPerfumes(updatedPerfumes);
  };
  const perfumeList = _perfumes.map((perfume) => (
    <PerfumeItem
      perfume={perfume}
      deletePerfume={deletePerfume}
      key={perfume.id}
    />
  ));
  return <ListWrapper>{perfumeList}</ListWrapper>;
};

export default PerfumeList;
