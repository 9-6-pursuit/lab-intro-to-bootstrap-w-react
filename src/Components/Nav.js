import React from 'react'

function Nav() {
  return (
    <>
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-text fs-2">
                <span className="text logo1"><b>Travel</b> </span>
                <span className="text-warning fst-italic">Blog</span>
            </span>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href="#!">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!">Popular posts</a>
            </li>
        </ul>
        </nav>
        
        
        
    </>
  )
}

export default Nav