import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-brand">
            <span className="nav-link text-white">
              <img
                src="https://cdn2.iconfinder.com/data/icons/flat-seo-web-ikooni/128/flat_seo2-21-128.png"
                width="30"
                height="30"
                className="d-inline-block align-top site-logo"
                alt=""
              />
              Credit Card Payment System
            </span>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-card" className="nav-link text-white">
              Add card
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
