import React, { useEffect, useRef, useState } from "react";
import "./Membership.css";

function Membership() {
  const titleRef = useRef(null);
  const [plans, setPlans] = useState([]);
  const [showRenewInstructions, setShowRenewInstructions] = useState(false);
  const [showNewMembership, setShowNewMembership] = useState(false);

  useEffect(() => {
    // Apply animation
    if (titleRef.current) {
      titleRef.current.classList.add("animate__animated", "animate__fadeInUp");
    }

    // Fetch membership plans from JSON
    fetch("/Membership.json")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((error) => console.error("Error loading membership data:", error));
  }, []);

  return (
    <div className="membership">
      <h1 className="membership-title" ref={titleRef}>Membership </h1>
      
      <div className="membership-info">
        <h2>IEEE Membership Benefits</h2>
        <p>IEEE membership offers access to technical innovation, cutting-edge information, networking opportunities, and exclusive member benefits.</p>
        <p>Members support IEEE's mission to advance technology for humanity and the profession, while memberships build a platform to introduce careers in technology to students around the world.</p>
        <p>As an IEEE member, you can collaborate with professionals from diverse fields, gain access to premium research papers, and participate in international conferences.</p>
        <p>IEEE membership also provides career development resources, mentorship programs, and exclusive discounts on IEEE products and services.</p>
        <p>Students and young professionals can benefit from leadership training, scholarships, and funding opportunities for innovative projects.</p>
        <a href="https://www.ieee.org/membership/index.html" target="_blank" rel="noopener noreferrer" className="membership-link">Learn More</a>
      </div>

      <div className="certificate-container">
        <h2>Certificate of Membership</h2>
        <img src="/Membership\membershipcerticifate.jpg" alt="IEEE Membership Certificate" className="certificate-img" />
      </div>

      <div className="membership-actions">
        <button className="membership-button" onClick={() => {
          setShowNewMembership(true);
          setShowRenewInstructions(false);
        }}>New Membership</button>
        <button className="membership-button" onClick={() => {
          setShowRenewInstructions(true);
          setShowNewMembership(false);
        }}>Renew Membership</button>
      </div>
      
      {showNewMembership && (
        <div className="membership-details">
          <h2>New Student Membership Registration</h2>
          <p>Follow the steps to get a new IEEE membership:</p>
          <ol>
            <li>Visit the official IEEE membership page and go to Join IEEE page.
            </li>
            <img src="/Membership\joining1.jpg" alt="joining Process" className="joining-img" />
            <li>Select the appropriate membership type.</li>
            <img src="/Membership\joining2.jpg" alt="joining Process" className="joining-img" />
            <li>Click on Create account button .</li>
            <img src="/Membership\joining3a.jpg" alt="joining Process" className="joining-img" />
            <li>Fill in the registration form as shown below.</li>
            <img src="/Membership\joining4.jpg" alt="joining Process" className="joining-img" />
            <li>Fill in the registration form as shown below.</li>
            <img src="/Membership\joining4a.jpg" alt="joining Process" className="joining-img" />
            <li>Fill in the registration form as shown below.</li>
            <img src="/Membership\joining5.jpg" alt="joining Process" className="joining-img" />
            <li>Check the profile summary once.</li>
            <img src="/Membership\joining6.jpg" alt="joining Process" className="joining-img" />
            <li>Check for applied student discounts in My Cart section  .</li>
            <img src="/Membership\joining7.jpg" alt="joining Process" className="joining-img" />
            <li>Click on your profile name to access your IEEE account.</li>
            <img src="/Membership\joining8.jpg" alt="joining Process" className="joining-img" />
            <li>Go to your profile </li>
            <img src="/Membership\joining9.jpg" alt="joining Process" className="joining-img" />
            <li>Go to  Personal Profile .</li>
            <img src="/Membership\joining10.jpg" alt="joining Process" className="joining-img" />
            <li>Receive confirmation and enjoy IEEE benefits.</li>
            <img src="/Membership\joining11.jpg" alt="joining Process" className="joining-img" />
          </ol>
          <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="membership-link">Join Now</a>
        </div>
      )}

      {showRenewInstructions && (
        <div className="membership-details">
          <h2>Renew Your Membership</h2>
          <img src="/Membership\WhatsApp Image 2025-02-08 at 09.21.17_b90d33a1.jpg" alt="Renewal Process" className="renewal-img" />
          <p>Follow these steps to renew your IEEE membership:</p>
          <ol>
            <li>Log in to your IEEE account.
              
            </li>
            <li>Navigate to the membership renewal section.</li>
            <li>Review your membership details.</li>
            <li>Proceed with the renewal payment.</li>
            <li>Receive confirmation and continue enjoying IEEE benefits.</li>
          </ol>
          <a href="https://www.ieee.org/membership/renew.html" target="_blank" rel="noopener noreferrer" className="membership-link">Renew Now</a>
        </div>
      )}

      <div className="membership-list">
        {plans.length > 0 && plans.map((plan) => (
          <article key={plan.id} className="membership-card">
            <a href={plan.link} target="_blank" rel="noopener noreferrer" aria-label={plan.title}>
              <img src={plan.image || "fallback.jpg"} alt={plan.title || "Membership Plan"} className="membership-img" />
              <h3 className="membership-name">{plan.title}</h3>
              <p className="membership-benefits">{plan.benefits}</p>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Membership;
