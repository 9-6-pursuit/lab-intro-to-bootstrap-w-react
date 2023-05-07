import postData from "./data/posts.json";

import Nav from "./component/Nav";

function App() {
  console.log(postData);
  return (
    <main>
      <Nav />
    </main>
  );
}

export default App;
