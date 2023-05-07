
import postData from "./data/posts";
import Hero from "./Hero"
import Nav from "./Nav.js"

function App() {
  console.log(postData);

  return <main>
      <Nav />
      <Hero />
    <div className="App">

  {
    postData.map((post) => {
      return (
        <li className = 'card' key = {post.id}>
          <span>{post.title}</span>             
          <button>Go to Post</button>
        </li>
      )
    })
  }

    </div>
  </main>;
}

export default App;
