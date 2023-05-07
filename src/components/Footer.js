import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="#">Contact me</a> | <a href="#">About the author</a>
          </div>
          <div className="col text-end">
            Copyright MyTravelBlog 2020
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
