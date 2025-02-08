import React, { useState, useMemo } from "react";
import "./events.css";
import "animate.css";
import eventsjson from "./events.json";

function Events() {
  // Default year set to 2025
  const defaultYear = 2025;

  // Extract unique years from the events JSON
  const years = [...new Set(eventsjson.map((event) => event.year))];

  // State for the selected year and filtered events
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [selectedImage, setSelectedImage] = useState(null); // For modal image

  // Filter events dynamically using useMemo for optimization
  const filteredEvents = useMemo(
    () => eventsjson.filter((event) => event.year === selectedYear),
    [selectedYear]
  );

  // Handle year dropdown change
  const handleYearChange = (e) => {
    const selectedYear = parseInt(e.target.value);
    setSelectedYear(selectedYear);
  };

  // Handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Close modal when clicking outside the image
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="events animate__animated animate__fadeIn">
      {/* Title */}
      <p className="eventstitle animate__animated animate__fadeInUp">
        IEEE PELS VIT EVENTS
      </p>

      {/* Dropdown menu for year selection */}
      <div className="menu-container">
        <div className="dropdown-item">
          <label htmlFor="year">Choose Year</label>
          <select
            id="year"
            onChange={handleYearChange}
            value={selectedYear || ""}
            aria-label="Select year"
          >
            <option value="" disabled>
              Choose Year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Events section */}
      <div className="events-cards">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => {
            // Check if the event is YANTRA or GRAVITAS
            const isSpecialEvent =
              event.event_title.toUpperCase().includes("YANTRA") ||
              event.event_title.toUpperCase().includes("GRAVITAS");

            return (
              <div
                className={`event-card ${isSpecialEvent ? "gold-bg" : ""}`}
                key={event.id}
              >
                <h3 className="event-title">{event.event_title}</h3>
                <p>
                  <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Speaker:</strong> {event.speaker || "TBA"}
                </p>

                {/* Display sponsors if available */}
                {event.sponsors && event.sponsors.length > 0 && (
                  <p>
                    <strong>Sponsors:</strong> {event.sponsors.join(", ")}
                  </p>
                )}

                <div className="event-images">
                  {event.images && event.images.length > 0 ? (
                    event.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Event: ${event.event_title} - Slide ${index + 1}`}
                        className="event-image"
                        onClick={() => handleImageClick(image)}
                      />
                    ))
                  ) : (
                    <p>No images available.</p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p>No events available for the selected year.</p>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged Event" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default Events;
