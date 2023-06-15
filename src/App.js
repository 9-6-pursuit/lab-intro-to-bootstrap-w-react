import postData from "./data/posts.json";
import Header from "./Components/Header";
import Search from "./Components/Search"
import Posts from "./Components/Posts";
import Locations from "./Components/Locations";
import images from "./images/index"

function App() {
  console.log(postData);
  return <main>
     <Header></Header>
    <blockquote class="blockquote text-center script-font">
      <h1 class="mb-0">Travel is the only thing you buy that makes you richer...</h1>
    </blockquote>
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
