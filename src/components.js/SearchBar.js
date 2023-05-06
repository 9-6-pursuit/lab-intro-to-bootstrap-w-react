import React from "react";
import { useState } from "react";

export default function SearchBar({ posts, setPosts }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filteredPosts = posts.filter((post) => {
      const titleMatch = post.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const locationMatch = post.location
        .toLowerCase()
        .includes(search.toLowerCase());
      return titleMatch || locationMatch;
    });
    setPosts(filteredPosts);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    handleSearch(search);
    setSearch("")
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
        Search
      </button>
    </div>
  );
}
