import React from "react";
import postData from "../data/posts.json"; 
import Post from "./Post";
import TableRows from "./TableRows";

function Index({search, posts}) {
  const locations = postData.reduce((acc, post) => {
    if (acc[post.location]) {
      acc[post.location]++;
    } else {
      acc[post.location] = 1;
    }
    return acc;
  }, {});

  const locationList = Object.keys(locations).map(location => ({
    name: location,
    count: locations[location],
  }));

  return (
    <div className="post-container">
      {posts.filtered.map(post => <Post key={post.id} post={post} />)}
      <div className="location-count">
        <h2>Post Count by Location</h2>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <TableRows locations={locationList} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
