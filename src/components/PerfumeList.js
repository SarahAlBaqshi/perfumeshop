import React, { useState } from "react";

//Components
import PerfumeItem from "./PerfumeItem";
import SearchBar from "../components/SearchBar";

//Styles
import { ListWrapper } from "../styles";
import AddButton from "./Buttons/AddButton";

const PerfumeList = ({ perfumes, createPerfume, deletePerfume }) => {
  const [query, setQuery] = useState("");

  const perfumeList = perfumes
    .filter((perfume) =>
      perfume.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((perfume) => (
      <PerfumeItem
        perfume={perfume}
        deletePerfume={deletePerfume}
        key={perfume.id}
      />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{perfumeList}</ListWrapper>
      <AddButton createPerfume={createPerfume} />
    </div>
  );
};

export default PerfumeList;
