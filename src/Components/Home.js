import React from 'react'
import './Home.css'
import 'animate.css';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className='Home animate__animated animate__fadeIn'>
      <div className="homesec1">
        <div className="homechapname">
          <p className="homewelcome">Welcome to,</p>
          <p className="homechaptername">IEEE POWER ELECTRONICS SOCIETY</p>
          <p className="homeclgname">
          
          <Typewriter
          onInit={(typewriter)=>{
              typewriter.pauseFor(1000).typeString("VELLORE INSTITUTE OF TECHNOLOGY,VELLORE").start();
          }}
          />
          </p>
        </div>
        <div className="homeintro">
          <p className="homeintrotitle">Introduction</p>
          <p className="homeintrodetail">The Power Electronics Society (PELS) is one of the fastest-growing technical societies of the Institute of Electrical and Electronics Engineers (IEEE).  For over 30 years, the PELS has facilitated and guided the development and innovation in power electronics technology.  This technology encompasses the effective use of electronic components, the application of circuit theory and design techniques, and the development of analytical tools for efficient conversion, control, and condition of electric power.</p>
        </div>
        <div className="homebranchvision">
          <p className="homebranchvisiontitle">Student Branch Vision</p>
          <p className="homebranchvisiondetail">The primary purpose of the IEEE student branch is to Inspire, Enable, Empower and Energize our student members to enhance their technical interests by providing them a platform to showcase their skills.</p>
        </div>
        <div className="homebranchmission">
          <p className="homebranchmissiontitle">Student Branch Mission</p>
          <p className="homebranchmissiondetail">
            <ul>
              <li>Work towards inspiring more students to become member</li>
              <li>Increase Membership Retention, through the benefits of IEEE</li>
              <li>Organize technical awareness programs for young professionals</li>
              <li>Form more Special Interest Groups to encourage project activity among the student members</li>
              <li>Kindle students interested in making new papers and projects</li>
              <li>Strive towards achieving more IEEE-sponsored awards and aim at representing papers in international conferences</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="homesec2">
        <div className="homechapterlogosec2"></div>
        {/* <div className="homeupcomingevents">
          <p className="homeupcomingeventstitle">Upcoming Events</p>
          <ul>
            <li>Event-1</li>
            <li>Event-2</li>
            <li>Event-3</li>
          </ul>
        </div>
        <div className="homeimplinks">
          <p className="homeimplinkstitle">Important Links</p>
          <ul>
            <li>Link-1</li>
            <li>Link-2</li>
            <li>Link-3</li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default Home
