import React, { useState, useEffect } from 'react';
import './Home.css';
import 'animate.css';
import Typewriter from 'typewriter-effect';

function Home() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate__slideInRight');

  const events = [
    {
      title: "PELS DAY 2025: Designing the Future – Smart Power Electronics for a Net Zero World",
      poster: "25_EVENTS/posters/PELSDAY.png",
      description:
        "An online session with Prof. Pallavi Bharadwaj from IIT Gandhinagar on how smart power electronics enable a sustainable, low-carbon future through advanced PV systems, EV chargers, hydrogen storage, and multi-energy optimization. Includes a carbon footprint quiz and Q&A.",
      date: "20th June 2025",
      speaker: "Prof. Bhardwaj , Assistant Professor, IIT Gandhinagar",
      time: "3:30-5:00 PM",
      link: "https://forms.gle/4TD13qeGda3yDfkG8"
    },
    {
      title: "Global Wind Day 2025",
      poster: "25_EVENTS/posters/GWW.png",
      description:
        "A campaign and interactive session exploring the role of wind energy in sustainable power systems. Includes quizzes, student presentations, and turbine insights.",
      date: "15th June 2025",
      speaker: "Mr Jeevan P ,Prince kumar,VIT Vellore",
      time: "4-5:3-0 PM"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate__slideOutLeft');
      setTimeout(() => {
        setCurrentEvent((prev) => (prev + 1) % events.length);
        setAnimationClass('animate__slideInRight');
      }, 400);
    }, 6000);
    return () => clearInterval(interval);
  }, [events.length]);

  const event = events[currentEvent];

  return (
    <div className='Home animate__animated animate__fadeIn'>
      <div className="homesec1">
        <div className="homechapname">
          <p className="homewelcome">Welcome to,</p>
          <p className="homechaptername">IEEE POWER ELECTRONICS SOCIETY</p>
          <p className="homeclgname">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(1000)
                  .typeString("VELLORE INSTITUTE OF TECHNOLOGY, VELLORE")
                  .start();
              }}
            />
          </p>
        </div>

        <div className="homeintro">
          <p className="homeintrotitle">Introduction</p>
          <p className="homeintrodetail">
            The Power Electronics Society (PELS) is one of the fastest-growing technical societies of IEEE.
            For over 30 years, PELS has facilitated and guided development and innovation in power electronics technology.
          </p>
        </div>

        <div className="homebranchvision">
          <p className="homebranchvisiontitle">Student Branch Vision</p>
          <p className="homebranchvisiondetail">
            The primary purpose of the IEEE student branch is to Inspire, Enable, Empower, and Energize student members
            by providing a platform to showcase their skills.
          </p>
        </div>

        <div className="homebranchmission">
          <p className="homebranchmissiontitle">Student Branch Mission</p>
          <ul className="homebranchmissiondetail">
            <li>Inspire more students to become members</li>
            <li>Increase membership retention</li>
            <li>Organize technical awareness programs</li>
            <li>Form Special Interest Groups</li>
            <li>Encourage new papers and projects</li>
            <li>Strive for IEEE-sponsored awards</li>
          </ul>
        </div>
      </div>

      <div className="homesec2">
        <div className="homechapterlogosec2" />

        <div className="homePromoVideo">
          <video
            src="Ready to power your future withIEEEPELS.mp4"
            controls
            autoPlay
            loop
            muted
          />
        </div>

        <div className="upcomingEventsTitle">
          <h2>📅 Upcoming Events</h2>
        </div>

        <div className={`upcomingEventCard animate__animated ${animationClass}`}>
          <img src={event.poster} alt={event.title} className="eventPoster" />
          <h3>{event.title}</h3>
          <p><strong>Description:</strong> {event.description}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Speaker:</strong> {event.speaker}</p>
          <p><strong>Time:</strong> {event.time}</p>
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="registerBtn"
            >
              Register Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
