import React from "react";
import Headertop from './Headertop';
import "./Headerbottom.css";
import { Link } from "react-router-dom";

function Headerbottom() {
  return (
    <>
      <Headertop />
      <div className="Headerbottom animate__animated animate__slideInLeft">
        <nav className="navbar headerbottom_navbarx navbar-expand-lg bg-body-tertiary">
          <div className="headerbottom_navx container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="buts;."
            >
              <span className="toggler">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="toggle">
                  <div className="bars" id="bar1"></div>
                  <div className="bars" id="bar2"></div>
                  <div className="bars" id="bar3"></div>
                </label>
              </span>
            </button>
            <div></div>
            <div className="headerbottom_navbar collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul>
                <Link to={"/"}><li className="home">HOME</li></Link>
                <Link to={"/about"}><li>ABOUT</li></Link>
                <Link to={"/committee"}><li>COMMITTEE</li></Link>
                <Link to={"/events"}><li>EVENTS</li></Link>
                <Link to={"/contact"}><li>CONTACT</li></Link>
                <Link to={"/articles"}><li>ARTICLES</li></Link> 
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Headerbottom;
