import postData from "./data/posts.json";
import Nav from "./Components/Nav";
import TableOfLocations from "./Components/TableOfLocations";
import Posts from "./Components/Posts";
import Footer from "./Components/Footer";


function App() {
  console.log(postData);
  return (
    <>
    <Nav />
      <main>
        <span id="quote" className="">Travel is the only thing you buy that makes you richer.</span>
        <span id="searchbar" className=""></span>
        <Posts />
        <TableOfLocations />
      
      </main>
      <Footer />
    </>

  )
}

export default App;
