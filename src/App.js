import { useState, useEffect } from "react";
import postData from "./data/posts.json";

import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Search from "./component/Search";
import Footer from "./component/Footer";
import AllPosts from "./Posts/AllPosts";

function App() {
  const [posts, setPosts] = useState({all: postData, filtered: postData})
  const [search, setSearch] = useState("")

  useEffect(() => {
    const term = search.toLocaleLowerCase();
    const filtered = postData.filter((post) => {
      return (
        post.location.toLocaleLowerCase().includes(term) ||
        post.title.toLocaleLowerCase().includes(term)
      )
    })

    if (filtered.length !== posts.filtered.length) {
      setPosts({...posts, filtered})
    }
  }, [posts, search])

  // console.log(postData);
  return (
    <main>
      <Nav />
      <Hero />
      <Search search={search} setSearch={setSearch}/>
      <AllPosts search={search} posts={posts}/>
      <Footer/>
    </main>
  );
}

export default App;
