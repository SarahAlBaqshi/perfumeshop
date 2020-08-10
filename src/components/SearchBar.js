import React from "react";

//Styles
import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Search for a name"
    />
  );
};

export default SearchBar;
