import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container p-4 justify-content-md-start justify-content-sm-start">
        <a href="/" className="navbar-brand fs-2 text-start" >
          Travel <span className="script-font text-warning">Blog</span>
        </a>
        <ul className="navbar-nav flex-md-row flex-sm-row">
          <li className="nav-item mx-md-3 mx-sm-3">
            <a href="/" className="nav-link text-start"> About </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-start"> Popular posts </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;