import React, { useState, useEffect } from "react";

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState(""); //create local state to manage the searchterm input value

  const filterPosts = () => {
    const filteredPosts = props.posts.filter((post) =>
      post.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    props.setFilteredPosts(filteredPosts);
    if (filteredPosts.length === 0) {
      props.setNoMatches(true);
    } else {
      props.setNoMatches(false);
    }
  };

  useEffect(() => {//useffect call the filterposts function whenever searchterm changes
    filterPosts();
  }, [searchTerm]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    props.setSearchTerm(event.target.value);//update the searchterm in the parent component
  };

  
  const handelCancel = () => {
    setSearchTerm("");
    //reset the filteredposts and noMatches states in the parent component
    props.setFilteredPosts(props.posts);
    props.setNoMatches(false);
  };

  
  return (
    <nav className="navbar d-none d-md-block mb-4">
      <div className="container-fluid d-flex justify-content-center">
        <form className="search-form d-flex align-items-center" role="search">
          <div className="input-group">
            <label className="search-input input-group-text">
              Search posts by location...
            </label>
            <input
              id="search-input"
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </div>
          <button
            className="btn btn-warning ms-2"
            type="button"
            onClick={handelCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </nav>
  );
}
