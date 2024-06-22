import React from "react";

function InfoCard(props) {
  return (
    <div className="info-cards">
      <span className="info-card-icon">
        {props.icon}
      </span>
      <p className="info-card-title"> {props.title} </p>
      <p className="info-card-description"> {props.description} </p>
    </div>
  );
}

export default InfoCard;
