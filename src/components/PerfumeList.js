import React, { useState } from "react";

import { observer } from "mobx-react";

//Components
import PerfumeItem from "./PerfumeItem";
import SearchBar from "../components/SearchBar";

// Stores
import perfumeStore from "../../src/stores/perfumeStore";

//Styles
import { ListWrapper } from "../styles";
import AddButton from "./Buttons/AddButton";

const PerfumeList = ({ createPerfume }) => {
  const [query, setQuery] = useState("");

  const perfumeList = perfumeStore.perfumes
    .filter((perfume) =>
      perfume.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((perfume) => <PerfumeItem perfume={perfume} key={perfume.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{perfumeList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(PerfumeList);
