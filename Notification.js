import React from "react";

function Notification() {
  const event = {
    title: "IEEE PELS Webinar",
    location: "Online",
    details: "Join us for an exclusive IEEE PELS event!",
    startDate: "2025-06-30T10:00:00", // Start time in ISO format
    endDate: "2025-06-30T11:00:00",
  };

  const addToCalendar = () => {
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDate.replace(/[-:]/g, "").slice(0,15)}Z/${event.endDate.replace(/[-:]/g, "").slice(0,15)}Z&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;

    window.open(calendarUrl, "_blank");
  };

  return (
    <div style={styles.card}>
      <h2>📢 Upcoming Event</h2>
      <p><strong>{event.title}</strong></p>
      <p>{event.details}</p>
      <p><strong>Date:</strong> June 30, 2025</p>
      <button onClick={addToCalendar}>Add to Google Calendar</button>
    </div>
  );
}

const styles = {
  card: {
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
    maxWidth: "400px",
    margin: "2rem auto",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
};

export default Notification;
