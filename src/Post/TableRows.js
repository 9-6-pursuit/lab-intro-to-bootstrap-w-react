import React from "react";

function TableRows({ locations }) {
  return (
    <>
      {locations.map((location) => (
        <tr key={location.name}>
          <td>{location.name}</td>
          <td className="text-center">
            <span className="rounded-pill bg-secondary text-white px-2">
              {location.count}
            </span>
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableRows;
