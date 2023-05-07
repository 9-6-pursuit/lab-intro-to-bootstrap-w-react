import React from "react";
import postData from "../data/posts.json";
import Post from "./Post";
import TableRows from "./TableRows";

function Index({ search, posts }) {
  const locations = postData.reduce((acc, post) => {
    if (acc[post.location]) {
      acc[post.location]++;
    } else {
      acc[post.location] = 1;
    }
    return acc;
  }, {});

  const locationList = Object.keys(locations).map((location) => ({
    name: location,
    count: locations[location],
  }));

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="row">
          {posts.filtered.map((post) => (
            <div key={post.id} className="col-md-6 mb-4">
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-4">
        <div className="location-count">
          <h2>
            Posts by <span className="text-warning">Location</span>
          </h2>
          <table className="table table-sm">
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
    </div>
  );
}

export default Index;
