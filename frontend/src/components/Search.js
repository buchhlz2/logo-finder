import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [formError, setFormError] = useState("");

  // form input validation for if input value is a link
  function isURL(str) {
    let pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  }

  const handleSearchInputChanges = (e) => {
    setSearchTerm(e.target.value);
    setFormError("");
  };

  // Once submitted, reset the form field
  const resetInputField = () => {
    setSearchTerm("");
  };

  // On form submit, set the search term, check if it's a valid URL, and then 
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    console.log(searchTerm);
    console.log(isURL(searchTerm));
    if (isURL(searchTerm)) {
      search(searchTerm);
      console.log("Submitted search.");
      resetInputField();
    } else {
      setFormError("Please paste a valid link.");
      resetInputField();
    }
  };

  return (
    <div>
      <h2>SEARCH BY PASTING WEBSITE LINK:</h2>
      <form className="search">
        <input
          value={searchTerm}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Paste any website link"
        />
        <input
          onClick={handleSearchSubmit}
          type="submit"
        />
        <p>{formError && <span>{formError}</span>}</p>
      </form>
    </div>
  );
};

export default Search;
