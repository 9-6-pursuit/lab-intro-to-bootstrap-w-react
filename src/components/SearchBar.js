import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCancel = () => {
    setSearchTerm('');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 d-flex">
          <span className="me-3">Search posts by location...</span>
          <input
            type="text"
            className="form-control me-3"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="btn btn-outline-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
