import React, { useState } from "react";
import postData from "./data/posts.json";
import Dquote from "./components.js/Dquote";
import Navbar from "./components.js/Navbar";
import SearchBar from "./components.js/SearchBar";
import Posts from "./components.js/Posts";
import Table from "./components.js/Table";

function App() {
  const [posts, setPosts] = useState(postData);
  // console.log(postData);
  // const [search, setSearch] = useState("");

  // const handleSearch = (event) => {
  //   setSearch(event.target.value);
  // };
  
  
  return (
    <main>
      <Navbar />
      <Dquote />
      <SearchBar />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Posts posts={posts} />
          </div>
          <div className="col-md-4">
            <Table posts={posts} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
