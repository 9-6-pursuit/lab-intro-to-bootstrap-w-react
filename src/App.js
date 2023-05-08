import postData from "./data/posts.json";
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
      <section className="container">
        <Search/>
        <section className="row row-gap-4">
          <Posts postData={postData} />
          <Table postData={postData} />
        </section>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
