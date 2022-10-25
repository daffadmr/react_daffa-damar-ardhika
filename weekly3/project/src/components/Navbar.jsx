import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-custom sticky-top navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          Whitepicture Studio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbars"
          aria-controls="navbars"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbars">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
            <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customer">
                Customer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
