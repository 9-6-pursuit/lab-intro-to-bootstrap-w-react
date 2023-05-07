import postData from "./data/posts.json";
import images from "./images";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Search from "./components/Search";
import Posts from "./components/Posts";
import Table from "./components/Table";
import Footer from "./components/Footer";


function App() {
  return (
    <main>
      <Header/>
      <Quote/>
      <section>
        <Search/>
        <div className="posts">
          <Posts
            postData={postData}
            images={images}
          />
        </div>
        <div className="table">
          <Table
            postData={postData}
          />
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
