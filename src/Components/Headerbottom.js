import React from "react";
import Headertop from './Headertop'
import "./Headerbottom.css";
import { Link } from "react-router-dom";

function Headerbottom() {
  return (
    <>
      <Headertop />
    <div className="Headerbottom animate__animated animate__slideInLeft">
      <nav class="navbar headerbottom_navbarx  navbar-expand-lg bg-body-tertiary">
        <div class="headerbottom_navx container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" id="buts;.">
            <span className="toggler">
              <input type="checkbox" id="checkbox"/>
              <label for="checkbox" class="toggle">
                  <div class="bars" id="bar1"></div>
                  <div class="bars" id="bar2"></div>
                  <div class="bars" id="bar3"></div>
              </label>
            </span>
          </button>
          <div></div>
          <div class="headerbottom_navbar collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul>
              <Link to={"/"}><li className="home">HOME</li></Link>
              <Link to={"/about"}><li>ABOUT</li></Link>
              <Link to={"/committee"}><li>COMMITTEE</li></Link>
              {/* <Link to={"/scopemembers"}><li>SCOPE MEMBERS</li></Link> */}
              <Link to={"/events"}><li>EVENTS</li></Link>
              {/* <Link to={"/achivements"}><li>ACHIVEMENTS</li></Link> */}
              <Link to={"/contact"}><li>CONTACT</li></Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Headerbottom;
