import React from "react";

//Styles
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a perfume name"
    />
  );
};

export default SearchBar;
