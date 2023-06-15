import React from 'react'

function LocationList({locations, filterCitiessByLocation}) {
  return (
    <div className='article'>
        <ul style={{textDecoration: "none"}}>
            {
                locations.map((location) => {
                    return(
                        <li className='card' key={location.id} onClick={() => console.log(location)}>{location.substring(0, location.length - 4) + location.substring
                        (location.length - 4, location.length)}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default LocationList