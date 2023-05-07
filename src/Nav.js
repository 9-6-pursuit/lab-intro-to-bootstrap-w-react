import React from "react";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <h1>Travel Blog</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
