import React, { useState, useEffect, useRef } from 'react';
import './committee.css';
import members from './committee_members.json';
import advisoryBoard from './advisoryboard.json';
import MemberCards from './MemberCards';

function Committee() {
  const [selectedTenure, setSelectedTenure] = useState('2023-2024');

  // Filter members and advisory board based on the selected tenure
  const filteredMembers = members.filter(member => member.tenure === selectedTenure);
  const filteredAdvisoryBoard = advisoryBoard.filter(member => member.tenure === selectedTenure);

  // Handle tenure selection change
  const handleTenureSelection = (e) => {
    setSelectedTenure(e.target.value);
  };

  // Title animation reference
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement) {
      titleElement.style.opacity = 0;
      titleElement.style.transform = 'translateY(50px)';
      titleElement.style.transition = 'transform 1s ease-out, opacity 1s ease-out';

      setTimeout(() => {
        titleElement.style.opacity = 1;
        titleElement.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <div className="committee">
      <center>
        <div className="committeetitle" ref={titleRef}>
          Committee Members
        </div>
      </center>

      {/* Dropdown Menu to Select Tenure */}
      <div className="menu-container">
        <div className="dropdown-item">
          <label htmlFor="tenure">Select Tenure</label>
          <select
            id="tenure"
            onChange={handleTenureSelection}
            value={selectedTenure}
            aria-label="Select Committee Tenure"
          >
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
          </select>
        </div>
      </div>

      {/* Committee Members Section */}
      <div className="committeemembers">
        <div className="container membersx">
          <div className="row">
            {filteredMembers.map(member => (
              <div className="col-sm-4 colx" key={member.id}>
                <MemberCards
                  member_img_link={member.member_img_link}
                  member_name={member.member_name}
                  member_position={member.member_position}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisory Board Section for 2024-2025 Tenure */}
      {selectedTenure === '2024-2025' && (
        <div className="advisoryboard">
          <center>
            <div className="advisorytitle">Advisory Board</div>
          </center>
          <div className="container membersx">
            <div className="row">
              {filteredAdvisoryBoard.map(member => (
                <div className="col-sm-4 colx" key={member.id}>
                <MemberCards
                  member_img_link={member.member_img_link}
                  member_name={member.member_name}
                  member_position={member.member_position}
                />
              </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Committee;
