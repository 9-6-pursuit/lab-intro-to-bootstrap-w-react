import postData from "./data/posts.json";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Footer from "./components/Footer";
import LocationList from "./components/LocationList";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  // console.log(postData);
  const [displayedLocations, setDisplayedLocations] = useState(postData);


  const getLocations = (locationList) => {
    let locationCounter = {}
    locationList.forEach(location => {
      locationCounter[location.location] = true
    })
    return Object.keys(locationCounter)
  }

  const filterCitiessByLocation = (selectedLocation) => {
    let filteredList = postData.filter((filteredLocation) => {
      return filteredLocation.location === selectedLocation
    })
    return <PostCard displayedLocations={displayedLocations}/>;
    return filteredList;
  }
  return (
    <div>
     <Navbar/>
     <Hero />
     <div className="container">
      <div className="row">
        <div className="col-lg-6">
        {
          postData.map((post, index) => {
            return <PostCard postData={post} displayedLocations={displayedLocations}/>
          })
        }
        </div>
        </div>
     </div>
     <LocationList filterCitiessByLocation={filterCitiessByLocation}
       locations={getLocations(postData)}/>
     <Footer />
    </div>
  );
}

export default App;
