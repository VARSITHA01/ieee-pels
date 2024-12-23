import React, { useState, useEffect } from "react";
import "./events.css";
import eventsjson from "./events.json"; // Ensure the events.json file is imported

function Events() {
  // Default year set to 2023
  const defaultYear = 2023;

  // Filter events for the default year (2023)
  const filteredEvents = eventsjson.filter((event) => event.year === defaultYear);

  // Set the default event when the year is selected
  const [selectedEvent, setSelectedEvent] = useState(filteredEvents[0]);
  const [selectedYear, setSelectedYear] = useState(defaultYear);

  // Handle year selection
  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedYear(selectedYear);

    // Filter events based on the selected year
    const filtered = eventsjson.filter((event) => event.year === parseInt(selectedYear));
    setSelectedEvent(filtered[0]); // Set the first event for the selected year
  };

  // Handle event selection
  const handleEventChange = (e) => {
    const selected = eventsjson.find((event) => event.id === parseInt(e.target.value));
    setSelectedEvent(selected);
  };

  // Get unique years from the events
  const years = [...new Set(eventsjson.map((event) => event.year))];

  return (
    <div className="events animate__animated animate__fadeIn">
      <p className="eventstitle animate__animated animate__slideInLeft">IEEE PELS VIT EVENTS</p>

      {/* Menu with dropdowns for year and event */}
      <div className="menu-container">
        {/* Dropdown menu for year selection */}
        <div className="dropdown-item">
          <label htmlFor="year">Choose Year</label>
          <select id="year" onChange={handleYearChange} value={selectedYear}>
            <option value="">Choose Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown menu for event selection */}
        {selectedYear && (
          <div className="dropdown-item">
            <label htmlFor="event">Choose Event</label>
            <select id="event" onChange={handleEventChange} value={selectedEvent?.id || ""}>
              <option value="">Choose Event</option>
              {filteredEvents.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.event_title}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {selectedEvent && (
        <div className="accordion accordion-flush events_list" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed event_title"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                {selectedEvent.event_title}
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="event_info">
                  <strong>Date:</strong> {selectedEvent.date} <br />
                  <strong>Speaker:</strong> {selectedEvent.speaker} <br /><br />
                </div>
                <div className="row event_rowx">
                  {selectedEvent.images.map((image, index) => (
                    <div className="col-sm-5 event_colx" key={index}>
                      <img src={image} alt={`${selectedEvent.event_title} image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
