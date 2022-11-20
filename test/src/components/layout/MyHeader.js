import logo from "./stolen.png";
import "../cssfiles/MyHeader.css";
import React, { useState } from "react";
import MainContainer from "./MainContainer";

function MyHeader() {
  // console.log("HERE");
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <div className="header-container">
      <div className="searchbar-logo-container">
        <img src={logo} alt="logo" className="logo-image" />
        <input
          className="search-bar"
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      <MainContainer searchInput={searchInput} />
    </div>
  );
}
export default MyHeader;
