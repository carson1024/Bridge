"use client";

import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query); // Trigger search when the form is submitted
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search.."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">
        <i className="bi bi-search" />
      </button>
    </form>
  );
};

export default SearchBox;
