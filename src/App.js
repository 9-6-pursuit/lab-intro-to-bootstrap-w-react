import postData from "./data/posts.json";
import Header from "./Components/Header";
import Search from "./Components/Search"
import Posts from "./Components/Posts";
import Locations from "./Components/Locations";
import images from "./images/index"
function App() {
  return <main>
    <Header></Header>
    <div class="d-flex justify-content-center">Travel is the only thing you buy that makes you richer...</div>
    <Search></Search>
    <aside className="container">
        <div class="row">
          <Posts postData={postData} images ={images}/>
          <Locations/>
        </div>
     </aside>
  </main>;
}

export default App;
