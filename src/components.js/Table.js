import React from "react";

function Table({ posts }) {
  const countByLocation = {};

  posts.forEach((post) => {
    if (countByLocation[post.location]) {
      countByLocation[post.location]++;
    } else {
      countByLocation[post.location] = 1;
    }
  });

  const rows = Object.entries(countByLocation).map(([location, count]) => (
    <tr key={location}>
      <td><strong>{location}</strong></td>
      <td>{count}</td>
    </tr>
  ));

  return (
    <div>
    <h4>Posts by <span style={{color: "gold"}}>location</span></h4>
    <table className="table">
      <caption>Posts by location</caption>
      <thead>
        <tr>
          <th>Location</th>
          <th>Posts</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  </div>
  
  );
}

export default Table;
