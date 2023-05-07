import React from 'react'

function TableOfLocations() {
  return (
    <>
    <th>Posts by <span className="yellow-text">location</span>
    </th>
        
        <table className="location-table table table-sm ">  
            <thead>
                <tr>  
                    <th>Location</th>
                    <th>Posts</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Disneyland</td>
                    <td>6</td>
                </tr>
                <tr>  
                    <td>Oahu</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default TableOfLocations