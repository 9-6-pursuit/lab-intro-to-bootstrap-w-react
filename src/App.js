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

  return (
    <main>
      <Navbar />
      <Dquote />
      <SearchBar posts={posts} setPosts={setPosts}/>
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
      <Footer />
    </main>
  );
}

export default App;
