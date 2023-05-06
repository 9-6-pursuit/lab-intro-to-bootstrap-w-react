import postData from "./data/posts.json";
import React from "react";
import images from "./images/index.js"
import { useState } from "react";

function App() {
  const [click,setClick] = useState("")
  const [posts, setPosts] = useState(postData)


  function handleButton(e) {
    e.preventDefault()
    search(posts)
    setClick("")
    
  }

  function search() {
    const filterPosts = posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(click.toLowerCase())
      const match = post.location.toLowerCase().includes(click.toLowerCase())
      return titleMatch || match
    })
    setPosts(filterPosts)
    console.log(filterPosts)
  }

  console.log(postData);

  let allLocations = postData.map(({location}) => location)

  let obj = {}
  
  for(let i = 0; i < allLocations.length; i++) {
    
    let key = allLocations[i]

    if(!obj[key]) {
      obj[key] = 1
    } else {
      obj[key] += 1
    } 
  }
 
  return (
  <main>
  <header>
      <h2>Travel <em className="script-font">Blog</em></h2>
      <nav>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#!">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Popular Posts</a>
        </li>
      </ul>
      </nav>
  </header>
 
  <body>
    <h2 className="center-text"><em>Travel is the only thing you buy that makes you nicer</em></h2>

    <form onSubmit={handleButton}>
      <label htmlFor="search" className="form-label">
        Search posts by location
      </label>
      <input type="text" className="form-control" id="search" value={click} onChange={(e) => {
        setClick(e.target.value)
      }}/>
      <button type="submit">Search</button>

    </form>

   
   


    <div className="cards container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
        {posts.map((post) => {
          return (
            <div class="card" >
            <img class="card-img-top" src={images[post.location.toLowerCase()]} alt={post.content} height="200px"></img>
            <div class="card-title"><h4>{post.title}</h4></div>
            <h5>{post.location}</h5>
            <div class="card-text"><h5>{post.content}</h5></div>
            <button class="btn btn-primary" data-toggle="collapse"  >Go to post</button>
            </div>
          )
        })}


              </div>
            </div>
          </div>
    <div className="posts-location col-sm-6">
          <h3 className="posts-container">Posts by <span className="posts">location</span></h3>
    <table className="table">
  <thead>
    <tr>
  
      <th scope="col">location</th>
      <th scope="col">post</th>
    </tr>
  </thead>
  <tbody>
      <th> {Object.keys(obj).map((city) => city).map(el => <tr><td>{el}</td></tr>)}</th>
      <th> {Object.values(obj).map((city) => city).map(el => <tr><td>{el}</td></tr>)}</th>
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
    </div>
        </div>
    </div>

    <footer>
      <p>Contact me</p>
      <p>About the author</p>
      <p>Copyright <strong>MyTravelBlog</strong> 2020</p>
    </footer>












    </body>

  </main>
  )
}

export default App;
