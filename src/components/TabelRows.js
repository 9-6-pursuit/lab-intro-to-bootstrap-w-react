import React from "react";

function TableRows() {
  return (
    <div className="container mt-4 mb-4">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Post 1</td>
              <td>2023-05-01</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Post 2</td>
              <td>2023-05-03</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Post 3</td>
              <td>2023-05-05</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableRows;
