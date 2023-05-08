import React from "react";
import postData from "./data/posts.json";
import Hero from "./components/Hero"
import Search from "./components/Search";
import Footer from "./components/Footer";
import Post from "./components/Post";
import TableRows from "./components/TabelRows"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const posts = postData.posts;

  return (
    <>
      <Hero />
      <Search />
      <section className="blog-posts container">
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4 mb-4">
              <Post post={post} />
            </div>
          ))}
        </div>
        <TableRows />
      </section>
      <Footer />
    </>
  );
}

export default App;
