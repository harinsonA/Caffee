import React from "react";

const Banner = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top col-12">
        <span
          className="navbar-brand col-3 text-center"
          href="# "
        >
          <h1>COFFEE</h1>
          <h2>
            <i>Arellan</i>
          </h2>
        </span>
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
        <div className="collapse navbar-collapse  col-9" id="navbarNav">
          <ul className="navbar-nav col-12">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                  <span>
                        <i className="fas fa-shopping-cart"></i><span className="badge badge-pill badge-warning">1</span>
                  </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Banner;
