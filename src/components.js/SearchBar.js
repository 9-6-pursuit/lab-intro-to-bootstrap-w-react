import React from "react";

export default function SearchBar({ search, setSearch, handleSearch }) {

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    handleSearch(search);
    // setSearch("");
  };

  return (
    <div className="input-group mb-3 search-box">
      <label htmlFor="searches" className="form-label me-5">
        Search posts by location...
      </label>
      <input
        type="text"
        className="form-control me-2"
        aria-label="Search"
        value={search}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="btn btn-warning me-5  search-btn"
        type="button"
      >
        Cancel
      </button>
    </div>
  );
}
