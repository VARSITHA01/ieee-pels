import React, { useEffect, useState } from 'react';
import './Home.css';
import 'animate.css';
import Typewriter from 'typewriter-effect';
import eventsData from './upcomingevents.json';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <div className='Home animate__animated animate__fadeIn'>
      <div className="homesec1">
        {/* Section 1: Welcome, Introduction, Vision, Mission */}
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

      {/* Section 2: Video + Upcoming Events */}
      <div className="homesec2">
        <div className="homechapterlogosec2" />
        
        {/* Promo Video */}
        <div className="homePromoVideo">
          <video 
            src="Ready to power your future withIEEEPELS.mp4" 
            controls 
            autoPlay 
            loop 
            muted
          />
        </div>

        {/* Upcoming Events Section */}
        <div className="homeUpcomingEvents">
          <p className="homeUpcomingEventsTitle">Upcoming Events</p>
          <div className="homeUpcomingEventsList">
            {events.length > 0 ? (
              events.map((event) => (
                <div key={event.id} className="homeUpcomingEventItem">
                  {event.poster && (
                    <img 
                      src={event.poster} 
                      alt={`${event.title} Poster`} 
                      className="eventPoster"
                    />
                  )}
                  <h3>{event.title}</h3>
                  <p className="eventDate">{event.date}</p>
                  <p className="eventDescription">{event.description}</p>
                  
                  {/* Display registration link if available */}
                  {event.registrationLink && (
                    <p className="eventRegistrationLink">
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        Register Now
                      </a>
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p>No upcoming events available.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
