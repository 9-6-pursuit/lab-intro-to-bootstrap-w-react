import React from "react";

const Footer = () => {
  return (
    <footer className="bg-warning text-muted py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-2">
              <a className="text-black text-decoration-none" href="#">
                <i className="bi bi-phone" aria-hidden="true"></i> Contact Me
              </a>
            </div>
            <div>
              <a className="text-black text-decoration-none" href="#">
                <i className="bi bi-file-person" aria-hidden="true"></i> About the author
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <p className="mb-0">© Copyright <span className="text-black fw-bolder">MyTravelBlog</span> 2020</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;