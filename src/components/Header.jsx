import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top border-bottom px-5">
          <div className="container-fluid">
            <img
              src="https://cdn.vectorstock.com/i/1000v/19/75/shoes-logo-running-template-vector-47171975.jpg"
              className="logo"
              alt="logo"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link bi bi-house-door-fill" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link bi bi-substack" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link bi bi-image" to="/gallary">
                    Gallary
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link bi bi-bag-fill" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>

              <button className="btn btn-outline-light m-2" type="button" id='Singup'>
                Sign Up
              </button>
              <button className="btn btn-outline-light m-2" type="button" id='Login'>
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
