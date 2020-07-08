import React, { useState } from "react";

//Components
import PerfumeItem from "./PerfumeItem";
import SearchBar from "../components/SearchBar";

//Styles
import { ListWrapper } from "../styles";

const PerfumeList = (props) => {
  const [query, setQuery] = useState("");

  const perfumeList = props.perfumes
    .filter((perfume) =>
      perfume.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((perfume) => (
      <PerfumeItem
        perfume={perfume}
        deletePerfume={props.deletePerfume}
        key={perfume.id}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{perfumeList}</ListWrapper>
    </>
  );
};

export default PerfumeList;
