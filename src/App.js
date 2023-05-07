import LocationCards from "./components/LocationCards";
import postData from "./data/posts.json";

function App() {
  console.log(postData);
  return <main>
    <LocationCards />
  </main>;
}

export default App;
