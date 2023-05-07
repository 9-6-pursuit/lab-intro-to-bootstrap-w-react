import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Quote from './components/Quote';
import PostList from './components/PostList';
import LocationTable from './components/LocationTable';
import Footer from './components/Footer';

import MainView from './components/MainView';


import { useState, useEffect } from 'react';
import postsData from './data/posts.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // ...

  return (
    <div className="App">
      <Header />
      <Quote />
      <SearchBar handleSearch={handleSearch} />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <PostList posts={posts} searchTerm={searchTerm} />
          </div>
          <div className="col-md-4 d-none d-md-block">           
           <LocationTable posts={posts} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

  

