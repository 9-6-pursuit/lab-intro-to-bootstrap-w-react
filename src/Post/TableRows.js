import React from "react";

function TableRows({ locations }) {
  return (
    <>
      {locations.map(location => (
        <tr key={location.name}>
          <td>{location.name}</td>
          <td>{location.count}</td>
        </tr>
      ))}
    </>
  );
}

export default TableRows;