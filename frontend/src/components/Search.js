import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchTerm(e.target.value);
  };
  const resetInputField = () => {
    setSearchTerm("");
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    props.search(searchTerm);
    console.log("Submitted search.");
    resetInputField();
  };

  return (
    <div>
      <h2>SEARCH BY PASTING WEBSITE LINK:</h2>
      <form className="search">
        <input
          value={searchTerm}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={handleSearchSubmit} type="submit" value="SEARCH" />
      </form>
    </div>
  );
};

export default Search;
