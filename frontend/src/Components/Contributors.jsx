import React from "react";
import ContributorCard from "./ContributorCard";
import profile1 from "../Assets/c-1.png";
import profile2 from "../Assets/c-2.jpg";
import profile3 from "../Assets/c-3.png";
import profile4 from "../Assets/c-4.png";
import "../Styles/Contributors.css";

function Contributors() {
  return (
    <div className="contributors-section" id="contributors">
      <div className="contributors-title-content">
        <h3 className="contributors-title">
          <span>Meet Our Contributors</span>
        </h3>
        <p className="contributors-description">
          Meet our exceptional team of contributors that help us enable this
          thought.
        </p>
      </div>

      <div className="contributors-cards-content">
        <ContributorCard
          img={profile1}
          name="Google Maps"
          title="Google's Web Mapping Service"
        />
        <ContributorCard
          img={profile2}
          name="Ministory of Roads Transport and Highways (MORTH) "
          title="Govt Ministry in India"
        />
        <ContributorCard
          img={profile3}
          name="Tata Motors"
          title="Indian Automobile MNC"
        />
        <ContributorCard
          img={profile4}
          name="Uber "
          title="Transportation Network Company"
        />
      </div>
    </div>
  );
}

export default Contributors;
