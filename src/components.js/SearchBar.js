import React from "react";

export default function SearchBar() {
  return (
    <div className="input-group mb-3 search-box">
      <label htmlFor="searches" className="form-label me-3">
        Search posts by location...
      </label>
      <input type="text" className="form-control me-2" aria-label="Search" />
      <button className="btn btn-warning me-5  search-btn" type="button">
        Search
      </button>
    </div>
  )
    /*<div className="container">
      <div className="d-flex">
        <label for="SearchBar">Search posts by location</label>
        <input type="text" className="form-control mr-1" />
        <button className="btn btn-warning search-btn" type="button">
          Search
        </button>
      </div>
    </div>
  );*/
}
