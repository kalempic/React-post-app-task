import React, { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = ({ button, getSearchTerm }) => {
  const [searchTerm, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getSearchTerm(searchTerm);
  };
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.inputWrapper}>
        <input
          className={classes.searchInput}
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
    </form>
  );
};

export default SearchBar;
