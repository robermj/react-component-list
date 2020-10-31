import { Link } from "react-router-dom"
const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        React Components
      </Link>

      <Link
        to="/"
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </Link>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          Home
        </Link>

        <Link to="/about" className="navbar-item">
          About
        </Link>

        <div className="navbar-item has-dropdown is-hoverable">
          <Link to="/" className="navbar-link">
            More
          </Link>

          <div className="navbar-dropdown">
            <Link to="/" className="navbar-item">
              About
            </Link>
            <Link to="/" className="navbar-item">
              Jobs
            </Link>
            <Link to="/" className="navbar-item">
              Contact
            </Link>
            <hr className="navbar-divider" />
            <Link to="/" className="navbar-item">
              Report an issue
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/" className="button is-primary">
              <strong>Sign up</strong>
            </Link>
            <Link to="/" className="button is-light">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
