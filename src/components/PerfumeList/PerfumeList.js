import React, { useState } from "react";

import { observer } from "mobx-react";

//Components
import PerfumeItem from "./PerfumeItem";
import SearchBar from "../SearchBar";

//Styles
import { ListWrapper } from "../../styles";

const PerfumeList = ({ perfumes = [] }) => {
  const [query, setQuery] = useState("");

  const perfumeList = perfumes
    .filter((perfume) =>
      perfume.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((perfume) => <PerfumeItem perfume={perfume} key={perfume.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{perfumeList}</ListWrapper>
    </div>
  );
};

export default observer(PerfumeList);
