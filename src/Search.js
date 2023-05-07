import React from "react";

function Search() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="input-group mb-3 w-50">
        <input type="text" className="form-control text-start" placeholder="Search by title or location..." />
        <button className="btn btn-warning" type="button">Cancel</button>
      </div>
    </div>
  );
}

export default Search;
