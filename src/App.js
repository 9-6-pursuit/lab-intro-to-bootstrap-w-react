import postData from "./data/posts.json";
import Nav from "./Components/Nav";
import InspirationalQuote from "./Components/InspirationalQuote";
import TableOfLocations from "./Components/TableOfLocations";
import Posts from "./Components/Posts";
import Footer from "./Components/Footer";
import "./App.css";
import { useState } from "react";



function App() {
  console.log(postData);
  let [search, setSearch] = useState("")
  function onChange(event){
    setSearch(event.target.value);
  }

  return (
    <>
    <Nav />
      <main className="container-fluid">


        <div className="row">
{/* Inspirational Quote */}
          <div className=" p-4 mb-4 bg-light rounded-3">
            <InspirationalQuote />
          </div>

{/* Searchbar */}
          <div className="col-md-12 search-form input-group" id="searchbar">
            <span>Search posts by location...</span>
            <input type="search" className="form-control rounded" placeholder="" aria-label="Search" aria-describedby="search-addon" value={search} onChange={onChange} />
            <button type="button" className="btn bg-warning">Cancel</button>
          </div>
        </div>

{/* Posts */}
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-8 col-sm-6">
              <Posts postData={postData}/>
            </div>

{/* Sidebar */}
            <div className="col-4 col-md-4 col-sm-6">
              <TableOfLocations postData={postData}/>
            </div>
          </div>
        </div>      
      </main>
      
{/* Footer */}
      <Footer />
    </>

  )
}

export default App;

/*
Notes: I didn't think to put the useState here I got very turned around.
*/
