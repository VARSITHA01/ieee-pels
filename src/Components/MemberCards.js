import React, { Component } from "react";
import "./memberCards.css";

export class MemberCards extends Component {
  render() {
    let { image, name, position } = this.props;

    console.log(image)

    return (
      <>
        <div class="card">
          <img class="card-img-top" src={image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title name-1">{name}</h5>
            <h5 class="card-title position-1">{position}</h5>
          </div>
        </div>
      </>
    );
  }
}

export default MemberCards;
