import React, { useState } from "react";
import "./events.css";
import "animate.css"; // Import the animate.css library
import eventsjson from "./events.json"; // Ensure the events.json file is imported

function Events() {
  const defaultYear = 2023;
  const years = [...new Set(eventsjson.map((event) => event.year))];

  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [filteredEvents, setFilteredEvents] = useState(
    eventsjson.filter((event) => event.year === defaultYear)
  );

  const handleYearChange = (e) => {
    const selectedYear = parseInt(e.target.value);
    setSelectedYear(selectedYear);

    const filtered = eventsjson.filter((event) => event.year === selectedYear);
    setFilteredEvents(filtered);
  };

  return (
    <div className="events animate__animated animate__fadeIn">
      {/* Styled title */}
      <p className="eventstitle animate__animated animate__fadeInUp">
        IEEE PELS VIT EVENTS
      </p>

      {/* Menu with dropdowns for year */}
      <div className="menu-container">
        <div className="dropdown-item">
          <label htmlFor="year">Choose Year</label>
          <select id="year" onChange={handleYearChange} value={selectedYear || ""}>
            <option value="">Choose Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display events in cards */}
      <div className="events-cards">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="event-card" key={event.id}>
              <h3 className="event-title">{event.event_title}</h3>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Speaker:</strong> {event.speaker}
              </p>
              <div className="event-images">
                {event.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${event.event_title} image ${index + 1}`}
                    className="event-image"
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No events available for the selected year.</p>
        )}
      </div>
    </div>
  );
}

export default Events;
