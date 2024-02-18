import React from "react";
import "./events.css";
// import eventsjson from "./events.json";

function Events() {
  return (
    <div className="events animate__animated animate__fadeIn">
      <p className="eventstitle animate__animated animate__slideInLeft">IEEE PELS VIT EVENTS</p>
      {/* <ul>
        {
          eventsjson
          && eventsjson.map(eventsjson => <a href={eventsjson.event_link} rel='noreferrer' target="_blank"><li>{eventsjson.event_title}</li></a>)
        }
      </ul> */}

      <div class="accordion accordion-flush events_list" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed event_title"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Introduction to Machine Learning
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="event_info">
                Date : September 22, 2023 <br/>
                Speaker : Mr. Souvick Chattejee from MathWorks <br/><br/>
              </div>
              <div className="row event_rowx">
                <div className="col-sm-5 event_colx">
                  <img src="ML_EVENT/ml1.jpg" alt="ML_EVENT" />
                </div>
                <div className="col-sm-5 event_colx">
                  <img src="ML_EVENT/ml2.jpg" alt="ML_EVENT" />
                </div>
                <div className="col-sm-5 event_colx">
                  <img src="ML_EVENT/ml3.jpg" alt="ML_EVENT" />
                </div>
                <div className="col-sm-5 event_colx">
                  <img src="ML_EVENT/ml4.jpg" alt="ML_EVENT" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Power Electronics and EV - An Equation
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="row event_rowx">
                <div className="col-sm-5 event_colx">
                  <img src="POWER_EVENT/pe1.jpg" alt="POWER_EVENT" />
                </div>
                <div className="col-sm-5 event_colx">
                  <img src="POWER_EVENT/pe2.jpg" alt="POWER_EVENT" />
                </div>
                <div className="col-sm-5 event_colx">
                  <img src="POWER_EVENT/pe3.jpg" alt="POWER_EVENT" />
                </div>
                <div className="col-sm-5 event_colx">
                  <img src="POWER_EVENT/pe4.jpg" alt="POWER_EVENT" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
