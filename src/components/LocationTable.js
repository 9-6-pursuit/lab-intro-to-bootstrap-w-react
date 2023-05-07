import React from 'react';

const LocationTable = ({ posts }) => {
  const locations = {};

  posts.forEach((post) => {
    locations[post.location] = (locations[post.location] || 0) + 1;
  });

  return (
    <div className="col-lg-4" style={{ marginTop: '20px' }}>
      <h5 className="mb-4" style={{ whiteSpace: 'nowrap' }}>Posts by <span style={{ color: 'orange' }}>location</span></h5>
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col">Posts</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(locations).map(([location, count]) => (
            <tr key={location}>
              <td>{location}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default LocationTable;


