import React from 'react'
import './events.css'
import eventsjson from './events.json'

function Events() {
  return (
    <div className='events'>
      <p className="eventstitle">IEEE PELS VIT EVENTS</p>
      <ul>
        {
          eventsjson
          && eventsjson.map(eventsjson => <a href={eventsjson.event_link} rel='noreferrer' target="_blank"><li>{eventsjson.event_title}</li></a>)
        }
      </ul>
    </div>
  )
}

export default Events