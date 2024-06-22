import React from "react";
import Reviews from "./Reviews";
import { Star } from 'lucide-react';

function ContributorCard(props) {
  return (
    <div className="contributor-card">
      <img src={props.img} alt={props.name} className="contributor-card-img" style={{width: '100px', height:'100px'}}/>
      <p className="contributor-card-name">{props.name}</p>
      <p className="contributor-card-title">{props.title}</p>
      <p className="contributor-card-stars">
        <Star
          style={{ color: "#F7BB50", paddingRight: "6px",width:'10px',height:'10px' }}
        />
        {props.stars}
        {/* <span className="contributor-card-reviews">
          {" "}
          ({props.reviews}+ Reviews)
  </span> */}
      </p>
    </div>
  );
}

export default ContributorCard;