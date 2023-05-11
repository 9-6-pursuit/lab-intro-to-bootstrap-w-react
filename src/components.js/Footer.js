import React from "react";

function Footer() {
  return (
    <footer className="p-3 text-center" style={{ backgroundColor: "gold" }} >
      <p> Copyright <b>MyTravelBlog</b> 2020</p>
      <a className='text-dark' href='https://www.linkedin.com/in/lakisha-johnson-0b0587219/'>
          Contact me
        </a>
        <div>
        <a className='text-dark' href='https://github.com/lakishaJohnson'>
          About the author
        </a>
        </div>
    </footer>
  );
}

export default Footer;
