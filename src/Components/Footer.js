import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
  return (
    <div className='footer'>
      <div className="footersec1">
        <Link to={"/"}><p><HomeIcon /></p></Link>
        <a 
          href="https://www.linkedin.com/company/105868654/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BvCKhIcPVQeuRrLMS74DaqQ%3D%3D" 
          rel='noreferrer' 
          target="_blank"
        >
          <p><LinkedInIcon /></p>
        </a>
        <Link to={"https://instagram.com/ieeepels_vitvellore?igshid=MzRlODBiNWFlZA=="} rel='noreferrer' target="_blank"><p><InstagramIcon /></p></Link>
        <a href="mailto:ieeepels@vit.ac.in" rel='noreferrer'><p><MailIcon /></p></a>
      </div>
      <div className="footersec2">
        <p>&#169; Copyright 2023 IEEE - All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions. A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
      </div>
      <div className="footersec3">
        {/* Add any additional footer content here */}
      </div>
    </div>
  )
}

export default Footer
