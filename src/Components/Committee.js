import React, { useState, useEffect, useRef } from 'react';
import './committee.css';
import members from './committee_members.json';
import advisoryBoard from './advisoryboard.json';
import MemberCards from './MemberCards';

function committee() {
  // Set default tenure to 2023-2024
  const [selectedTenure, setSelectedTenure] = useState('2023-2024');

  // Filter members based on the selected tenure
  const filteredMembers = members.filter(member => member.tenure === selectedTenure);
  const filteredAdvisoryBoard = advisoryBoard.filter(member => member.tenure === selectedTenure);

  // Handle tenure selection
  const handleTenureSelection = (tenure) => {
    setSelectedTenure(tenure);
  };

  // Animation setup using JavaScript
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement) {
      // Initial setup for the title position
      titleElement.style.opacity = 0;
      titleElement.style.transform = 'translateY(50px)';
      titleElement.style.transition = 'transform 1s ease-out, opacity 1s ease-out';

      // Trigger the animation
      setTimeout(() => {
        titleElement.style.opacity = 1;
        titleElement.style.transform = 'translateY(0)';
      }, 100); // Delay to ensure styles are applied before transition
    }
  }, []);

  return (
    <div className='committee'>
      <center>
        <div className="committeetitle" ref={titleRef}>Committee Members</div>
      </center>

      {/* Dropdown Menu to select tenure */}
      <div className="dropdown">
        <button className="dropdown-button">{selectedTenure}</button>
        <div className="dropdown-content">
          <a href="#" onClick={() => handleTenureSelection('2023-2024')}>2023-2024</a>
          <a href="#" onClick={() => handleTenureSelection('2024-2025')}>2024-2025</a>
        </div>
      </div>

      {/* Committee Members Section */}
      <div className="committeemembers">
        <div className="container membersx">
          <div className="row">
            {
              filteredMembers.map(member => (
                <div className="col-sm-4 colx" key={member.id}>
                  <MemberCards
                    member_img_link={member.member_img_link}
                    member_name={member.member_name}
                    member_position={member.member_position}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* Advisory Board Section if tenure is 2024-2025 */}
      {selectedTenure === '2024-2025' && (
        <div className="advisoryboard">
          <center>
            <div className="advisorytitle">Advisory Board</div>
          </center>
          <div className="container membersx">
            <div className="row">
              {
                filteredAdvisoryBoard.map(member => (
                  <div className="col-sm-4 colx" key={member.id}>
                    <MemberCards
                      member_img_link={member.member_img_link}
                      member_name={member.member_name}
                      member_position={member.member_position}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Committee;
