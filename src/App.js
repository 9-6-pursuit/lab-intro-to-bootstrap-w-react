import React, { useState } from "react";
import postData from "./data/posts.json";
import Dquote from "./components.js/Dquote";
import Navbar from "./components.js/Navbar";
import SearchBar from "./components.js/SearchBar";
import Posts from "./components.js/Posts";
import Table from "./components.js/Table";
import Footer from "./components.js/Footer";

function App() {
  const [posts, setPosts] = useState(postData);
  const [noResults, setNoResults] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search)
    const filteredPosts = posts.filter((post) => {
      const titleMatch = post.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const locationMatch = post.location
        .toLowerCase()
        .includes(search.toLowerCase());
      return titleMatch || locationMatch;
    });
    if (filteredPosts.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
      setPosts(filteredPosts);
    }
  };

  return (
    <main>
      <Navbar />
      <Dquote />
      <SearchBar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {noResults ? (
              <div className="alert alert-danger">
                No posts found with the search term "{search}". Please try
                again.
              </div>
            ) : (
              <Posts posts={posts} />
            )}
          </div>
          <div className="col-md-4">
            <Table posts={posts} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
