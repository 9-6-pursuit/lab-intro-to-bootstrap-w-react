import React from "react";

export default function Sidebar({posts}) {
  const locationCounts = {};
  const locations = [];

  posts.forEach(post => {
    if (locationCounts[post.location]) {
      locationCounts[post.location]++;
    } else {
      locationCounts[post.location] = 1;
      locations.push(post.location);
    }
  });

  return (
    <table className="table mt-4 mt-md-0">
      <thead>
        <h3 className="fs-4">Posts by<span className="text-warning">location</span></h3>
        <tr>
          <th scope="col">Location</th>
          <th scope="col">Posts</th>
        </tr>
      </thead>
      <tbody>
        {locations.map(location => (
          <tr key={location}>
            <th scope="row">{location}</th>
            <td className="text-center"><span className="badge text-bg-secondary">{locationCounts[location]}</span></td>
          </tr>
        ))}
      </tbody>
    </table>  
  );
}
