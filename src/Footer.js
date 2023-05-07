import React from "react";

function Footer() {
  return (
    <footer className="bg-warning text-dark">
      <div className="footer-links">
        <div>
        <a href="#" className="text-dark">Contact Me</a>
        </div>
        <div>
        <a href="#" className="text-dark">About the Author</a>
        </div>
      </div>
      <div className="copy-text">
        <p className="fw-bold">&copy; 2023 Travel Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
