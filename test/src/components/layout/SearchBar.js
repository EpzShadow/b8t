import React, { useState } from "react";
import MainContainer from "./MainContainer";
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <div>
        {/* <p>Country</p>
        <p>Continent</p> */}
        <MainContainer searchInput = {searchInput}/>
      </div>
    </div>
  );
};

export default SearchBar;
