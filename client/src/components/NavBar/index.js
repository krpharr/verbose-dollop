import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <div>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Google Books Search</a>
            <a href="/#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li className={location.pathname === "/search" ? "active" : ""}>
                <Link to="/search">
                  Search
                </Link>
              </li>
              <li className={location.pathname === "/saved" ? "active" : ""}>
                <Link to="/saved">
                  Saved
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="slide-out">
        <li>
          <Link to="/search" className="sidenav-close">
            Search
          </Link>
        </li>
        <li>
          <Link to="/saved" className="sidenav-close">
            Saved
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;