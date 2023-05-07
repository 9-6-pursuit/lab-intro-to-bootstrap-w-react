import React, { useState } from 'react';
import PostList from './PostList';
import LocationTable from './LocationTable';
import posts from '../data/posts.json';

const MainView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h1 className="mt-4 script-font blog-color">My Travel <span className="text-primary">Blog</span></h1>
            <div>
              <a href="#">About</a>
              <span className="mx-2">|</span>
              <a href="#">Popular Posts</a>
            </div>
          </div>
          <blockquote className="mt-4">"The world is a book and those who do not travel read only one page." - St. Augustine</blockquote>
          <form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search posts by location..."
                aria-label="Search posts by location"
                aria-describedby="search-button"
                value={searchTerm}
                onChange={handleSearch}
              />
              {searchTerm && (
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="cancel-button"
                  onClick={() => setSearchTerm('')}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
          <PostList posts={posts} searchTerm={searchTerm} />
        </div>
        <LocationTable posts={posts} />
      </div>
      <footer className="mt-4">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <a href="#">Contact me</a>
          </div>
          <div className="col-md-6 text-md-end">
            <p>&copy; 2021 My Travel Blog</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainView;
