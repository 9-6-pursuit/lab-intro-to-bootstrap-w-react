import postData from "./data/posts.json";
import Nav from "./Components/Nav";
import TableOfLocations from "./Components/TableOfLocations";
import Posts from "./Components/Posts";
import Footer from "./Components/Footer";
import "./App.css";


function App() {
  console.log(postData);
  return (
    <>
    <Nav />
      <main className="container-fluid">
        <div className="row">
          {/* <div className="col-md-12 col-lg-6 mx-auto">
            <blockquote class="blockquote blockquote-custom bg-light.bg-gradient p-12  rounded ">
              <p class="mb-o mt-2 font-italic"> */}
                <span id="quote" className="">Travel is the only thing you buy that makes you richer.</span>
              {/* </p>
            </blockquote>
          </div> */}
          <div className="col-md-12 search-form input-group" id="searchbar">
            <span>Search posts by location...</span>
            <input type="search" className="form-control rounded" placeholder="" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn bg-warning">Cancel</button>
 
          </div>


        </div>


<div className="container">
  <div className="row">
    <div className="col-8 col-md-8 col-sm-6">
      <Posts />
    </div>
    <div className="col-4 col-md-4 col-sm-6">
      <TableOfLocations />
    </div>
  </div>
</div>






        
      
      </main>
      {/* <aside>
        TESTING GRID
      <div className="container-fluid">
        <div className="row">
          <div className="ice col-8 col-md-4">AAA col-8 col-md-4</div>
          <div className="green col-8 col-md-4">BBB col-8 col-md-4</div>
          <div className="blue col-6 col-md-4">CCC col-4 col-md-4</div>
          
          <div className="green col-6 col-md-4">DDD 6/4/2</div>
          <div className="blue col-4 col-md-4">EEE 6/4/2</div>
          <div className="ice col-2 col-md-4">FFF 6/4/2</div>

        </div>


        <div className="row">
  <div className="orange col-4">.col-4</div>
  <div className="orange col-4">.col-4</div>
  <div className="orange col-4">.col-4</div>
</div>

<div class="row">
  <div class="green col-sm-4">.col-sm-4</div>
  <div class="green col-sm-4">.col-sm-4</div>
  <div class="green col-sm-4">.col-sm-4</div>
</div>

<div class="row">
  <div class="blue col-md-4">.col-md-4</div>
  <div class="blue col-md-4">.col-md-4</div>
  <div class="blue col-md-4">.col-md-4</div>
</div>

<div class="row">
  <div class="purple col-lg-4">.col-lg-4</div>
  <div class="purple col-lg-4">.col-lg-4</div>
  <div class="purple col-lg-4">.col-lg-4</div>
</div>

<div className="row">
  <div className="ice col-xl-4">.col-xl-4</div>
  <div className="ice col-xl-4">.col-xl-4</div>
  <div className="ice col-xl-4">.col-xl-4</div>
</div>
</div>
      </aside> */}
      <Footer />
    </>

  )
}

export default App;
