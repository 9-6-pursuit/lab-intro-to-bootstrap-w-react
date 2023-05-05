import React from "react";

export default function SearchBar() {

    
  return (
    <div className="input-group mb-3">
      <label htmlFor="searches" className="form-label">
        Search posts by location...
      </label>
      <input type="text" className="form-control" aria-label="Search" />
      <button className="btn btn-warning" type="button">
        Cancel
      </button>
    </div>
  );
}
