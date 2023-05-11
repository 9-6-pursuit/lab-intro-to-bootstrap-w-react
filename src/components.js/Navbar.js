export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          href="https://example.com"
          className="navbar-brand display-4 p-3"
          style={{ fontSize: 30 }}
        >
          <strong>Travel </strong>
          <span
            className="script-font"
            style={{
              color: "gold",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Blog
          </span>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="https://example.com"
                className="nav-link active"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="https://example.com" className="nav-link">
                Popular posts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
