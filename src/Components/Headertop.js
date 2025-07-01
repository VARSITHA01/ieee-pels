import React from 'react'
import './Headertop.css'
import { Link } from "react-router-dom";

function Headertop() {
  return (
    <div className='Headertop animate__animated animate__fadeInDown'>
      <Link to={"https://www.ieee.org"} rel='noreferrer' target="_blank"><li>IEEE.org</li></Link>
      <Link to={"https://ieeexplore.ieee.org/Xplore/home.jsp"} rel='noreferrer' target="_blank"><li className='hidden_top_header'>IEEE Xplore Digital Library</li></Link>
      <Link to={"http://standards.ieee.org"} rel='noreferrer' target="_blank"><li className='hidden_top_header'>IEEE Standards</li></Link>
      <Link to={"http://spectrum.ieee.org"} rel='noreferrer' target="_blank"><li className='hidden_top_header'>IEEE Spectrum</li></Link>
      <Link to={"https://www.ieee.org/sitemap.html"} rel='noreferrer' target="_blank"><li>More Sites</li></Link>
    </div>
  )
}

export default Headertop