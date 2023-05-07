import postData from "./data/posts.json";
import Nav from "./Components/Nav";
import TableOfLocations from "./Components/TableOfLocations";
import Posts from "./Components/Posts";
import Footer from "./Components/Footer";
import "./App.css";
import { useState } from "react";


function App() {
  console.log(postData);
  let [search, setSearch] = useState("")
  return (
    <>
    <Nav />
      <main className="container-fluid">
        <div className="row">
          <div className=" p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
               <blockquote className="blockquote text-center">
                <p className="col-md-12 fs-4">
                Travel is the only thing you buy that makes you richer.
                </p>
              </blockquote>    

            </div>
          </div>
          <div className="col-md-12 search-form input-group" id="searchbar">
            <span>Search posts by location...</span>
            <input type="search" className="form-control rounded" placeholder="" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn bg-warning">Cancel</button>
 
          </div>


        </div>


<div className="container">
  <div className="row">
    <div className="col-8 col-md-8 col-sm-6">
      <Posts postData={postData}/>
    </div>
    <div className="col-4 col-md-4 col-sm-6">
      <TableOfLocations />
    </div>
  </div>
</div>

  
      
      </main>
      

      <Footer />
    </>

  )
}

export default App;

/*
Notes: I didn't think to put the useState here I got very turned around.
*/
