import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='contact animate__animated animate__fadeIn'>
      <p className="contacttitle animate__animated animate__slideInLeft">Contact Details</p>
      <div className="contact_details">
        <div className="contact_name">Dr. Albert Alexander S.</div>
        <div className="contact_position">Faculty Co-ordinator</div>
        <div className="contact_email">ootyalex@gmail.com</div>
      </div>
      <div className="contact_details">
        <div className="contact_name">Dr. Chitra A.</div>
        <div className="contact_position">Faculty Co-ordinator</div>
        <div className="contact_email">chitra.a@vit.ac.in</div>
      </div>
    </div>
  )
}

export default Contact