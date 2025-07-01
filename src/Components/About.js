import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="abouttitle">About Us</div>

      {/* Container for all sections */}
      <div className="about-container">
        {/* Section 1: Our Institution */}
        <a
          href="https://www.vit.ac.in/"  // Link to VIT website
          target="_blank"  // Open in new tab
          rel="noopener noreferrer"  // Security
          className="aboutsec"
        >
          <img
            src="GRAVITASEVENTS_24/VIT.jpg"
            alt="VIT Institution"
            className="aboutsec-img"
          />
          <div className="aboutsec-content">
            <p className="aboutsectitle">Our Institution</p>
            <p>
              Vellore Institute of Technology (VIT) is a private research deemed university 
              located in Katpadi in Vellore, Tamil Nadu, India. The institution offers 66 
              Undergraduate, 58 Postgraduate, and more.
            </p>
            <p>
              VIT consolidated its disciplines into 20 Schools of Study with the addition of the 
              VIT Law School at its Chennai campus. VIT implements the Fully Flexible Credit System 
              (FFCS), allowing students to customize their timetables. 33 Professors of VIT were among 
              the top 2% scientists of the world in a survey conducted by Stanford University, USA, in 2021.
            </p>
          </div>
        </a>

        {/* Section 2: About IEEE */}
        <a
          href="https://www.ieee.org/"  // Link to IEEE website
          target="_blank"
          rel="noopener noreferrer"
          className="aboutsec"
        >
          <img
            src="ieee_logo.png"
            alt="IEEE"
            className="aboutsec-img"
          />
          <div className="aboutsec-content">
            <p className="aboutsectitle">About IEEE</p>
            <p>
              IEEE is the world's largest professional association dedicated to advancing 
              technological innovation and excellence for the benefit of humanity. IEEE and 
              its members inspire a global community through IEEE's highly cited publications, 
              conferences, technology standards, and professional and educational activities.
            </p>
            <p>
              With over 430,000 members in 160+ countries, IEEE publishes a third of the world's 
              technical literature in electrical engineering, computer science, and electronics. 
              It also develops international standards supporting telecommunications, IT, and 
              power generation services.
            </p>
          </div>
        </a>

        {/* Section 3: Power Electronics Society */}
        <a
          href="https://www.ieee-pels.org/"  // Link to Power Electronics Society website
          target="_blank"
          rel="noopener noreferrer"
          className="aboutsec"
        >
          <img
            src="pels-logo.png"
            alt="Power Electronics Society"
            className="aboutsec-img"
          />
          <div className="aboutsec-content">
            <p className="aboutsectitle">Power Electronics Society</p>
            <p>
              The Power Electronics Society (PELS) is a fast-growing technical society of IEEE. 
              For over 30 years, PELS has guided the development and innovation in power electronics 
              technology, encompassing the use of electronic components, circuit theory, and design 
              techniques for efficient power conversion and control.
            </p>
            <ul>
              <li>
                Upholding scientific and educational aspects of power electronics and its applications.
              </li>
              <li>
                Keeping members updated on the latest technological developments and research advances.
              </li>
            </ul>
            <p>
              Join PELS to access a wealth of information, stay competitive in the workplace, and 
              grow personally and professionally.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
