import React, { Component } from "react";
import "./memberCards.css";

export class MemberCards extends Component {
  render() {
    let { member_img_link, member_name, member_position } = this.props;

    return (
      <>
        <div className="card">
          <img className="card-img-top" src={member_img_link} alt="Member" />
          <div className="card-body">
            <h5 className="card-title name-1">{member_name}</h5>
            <h5 className="card-title position-1">{member_position}</h5>
          </div>
        </div>
      </>
    );
  }
}

export default MemberCards;
