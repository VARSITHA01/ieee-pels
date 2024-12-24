import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className='contact animate__animated animate__fadeIn'>
      <p className="contacttitle animate__animated animate__slideInLeft">Contact Details</p>

      {/* Contact details for Dr. Albert Alexander S. */}
      <div className="contact_details_with_image">
        <img 
          src="facultycoordinator\albert_alexander_s.jpeg" 
          
          className="contact_image" 
        />
        <div>
          <div className="contact_name">Dr. Albert Alexander S.</div>
          <div className="contact_position">Faculty Co-ordinator</div>
          <div className="contact_email">ootyalex@gmail.com</div>
        </div>
      </div>

      {/* Contact details for Dr. Chitra A. */}
      <div className="contact_details_with_image">
        <img 
          src="facultycoordinator\chitra_a.jpeg" 
          className="contact_image" 
        />
        <div>
          <div className="contact_name">Dr. Chitra A.</div>
          <div className="contact_position">Faculty Co-ordinator</div>
          <div className="contact_email">chitra.a@vit.ac.in</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
