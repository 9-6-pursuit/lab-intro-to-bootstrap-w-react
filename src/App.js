import React, { useState } from "react";
import postData from "./data/posts.json";
import images from "./images";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Search from "./component/Search";
import Content from "./component/Content";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";

function App() {
  const [filteredPosts, setFilteredPosts] = useState(postData);
  const [searchTerm, setSearchTerm] = useState("");
  const [noMatches, setNoMatches] = useState(false);


  return (
    <>
      <Navbar />
      <Banner />
      <Search posts={postData} 
              setFilteredPosts={setFilteredPosts} 
              setSearchTerm={setSearchTerm} 
              setNoMatches={setNoMatches} 
      />
      <div className="container-fluid">
        <div className="row content m-auto">
          <div className="col-md-9">
            <Content posts={filteredPosts} 
                    images={images} 
                    searchTerm={searchTerm} 
                    noMatches={noMatches} 
            />
          </div>
          <div className="col-md-3">
            <Sidebar posts={postData}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
