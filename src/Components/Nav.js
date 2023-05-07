import React from 'react'

function Nav() {
  return (
    <>
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-text">
                <span className="text logo1">Travel </span>
                <span className="text logo2">Blog</span>
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