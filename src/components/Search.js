import React from "react";

function Search() {
  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search blog posts" />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
