import React from 'react'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className="abouttitle">About Our Chapter</div>
      <div className="aboutsec aboutsec1">
        <p className="aboutsectitle aboutsec1title">Our Institution</p>
        <div className="aboutsec1flex">
        <div className="aboutsec1left">
          <div className="vit_logo"></div>
        </div>
        <div className="aboutsec1right">
        Vellore Institute of Technology (VIT) is a private research deemed university located in Katpadi in Vellore, Tamil Nadu, India. The institution offers 66 Undergraduate, 58 Postgraduate, 15 Integrated, 2 Research and 2 M.Tech Industrial Programmes. It has campuses in Vellore and Chennai and sister universities in Amaravati, Bhopal and Bengaluru.<br/>
        VIT consolidated its disciplines into 20 Schools of Study with the addition of the VIT Law School at its Chennai campus. VIT implements the Fully Flexible Credit System (FFCS) which gives the students to choose and make their own timetables by choosing the subjects and the faculties for the next semester. 33 Professors of VIT are among the top 2% scientists of the world as shown in a survey conducted by Stanford University, USA in 2021.
        </div>
        </div>
      </div>
      <div className="aboutsec aboutsec2">
        <p className="aboutsectitle aboutsec2title">About IEEE</p>
        <div className="aboutsec2left">
          <div className="ieee_logo"></div>
        </div>
        <div className="aboutsec2right">
          IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities.IEEE is the trusted “voice” for engineering, computing, and technology information around the globe. There are more than 430,000 IEEE members in more than 160 countries. The IEEE publishes a third of the world's technical literature in electrical engineering, computer science, and electronics and is a leading developer of international standards that underpin many of today's telecommunications, information technology, and power generation products and services. The IEEE's roots go back to 1884 when electricity began to become a major influence in society. There was one major established electrical industry, the telegraph, which since the 1840s had come to connect the world with a data communications system faster than the speed of transportation. The telephone and electric power and light industries had just gotten underway. IEEE, pronounced “Eye-triple-E,” stands for the Institute of Electrical and Electronics Engineers. The association is chartered under this name and it is the full legal name. To learn more about the association's name, please read the History of IEEE.
        </div>
      </div>
      <div className="aboutsec aboutsec3">
        <p className="aboutsectitle aboutsec3title">Power Electronics Society</p>
        <div className="aboutsec3left">
          <div className="chapter_logo"></div>
        </div>
        <div className="aboutsec3right">
          <p className="aboutsec3detailp1">
            The Power Electronics Society (PELS) is one of the fastest growing technical societies of the Institute of Electrical and Electronics Engineers (IEEE).  For over 30 years, PELS has facilitated and guided the development and innovation in power electronics technology.  This technology encompasses the effective use of electronic components, the application of circuit theory and design techniques, and the development of analytical tools toward efficient conversion, control, and condition of electric power.  Our members include preeminent researchers, practitioners, and distinguished award winners.  IEEE PELS publishes the IEEE Transactions on Power Electronics, a top referenced journal among all IEEE publications.
          </p>
          <p className="aboutsec3detailp2">
            <p className="t1x">The Power Electronics Society is dedicated to:</p>
            <ul>
              <li>Upholding the vital scientific and educational aspects of power electronics and its applications.</li>
              <li>Keeping its members around the globe up to date on state-of-the-art technological developments and advances in power electronics research.</li>
            </ul>
          </p>
          <p className="aboutsec3detailp3">
            In striving to build knowledge and awareness of the latest technologies and other advances in power electronics, the Power Electronics Society’s goal is to keep members current and competitive in the workplace and provide them with the tools necessary to help them grow both personally and professionally.  We invite you to join us and benefit from a world of invaluable information and support.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About