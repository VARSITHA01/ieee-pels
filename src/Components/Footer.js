import React from 'react'
import './footer.css'
import Headertop from './Headertop'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
  return (
    <div className='footer'>
      <div className="footersec1">
        <p><HomeIcon /></p>
        <p><LinkedInIcon /></p>
        <p><InstagramIcon /></p>
        <p><GitHubIcon /></p>
        <p><TwitterIcon /></p>
        <p><FacebookIcon /></p>
        <p><YouTubeIcon /></p>
        <p><MailIcon /></p>
      </div>
      <div className="footersec2">
        <p>&#169; Copyright 2023 IEEE - All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions. A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
      </div>
      <div className="footersec3">
        <Headertop />
      </div>
    </div>
  )
}

export default Footer