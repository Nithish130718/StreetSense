import React from "react";
import Map from "../Assets/about-map.jpg";
import KeyFeatures from "./KeyFeatures";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Map} className="about-image" alt="Map-pic" />
      </div>
      <div className="about-text-content">
        <h3 className="about-title">
          <span>About StreetSense</span>
        </h3>
        <p className="about-description">
          Welcome to StreetSense, your ultimate urban mobility companion.
          StreetSense is a traffic management solution designed to optimize your
          commute, minimize congestion, and enhance safety on city streets. With
          real-time traffic updates, intelligent route planning, and
          personalized navigation assistance, StreetSense empowers you to
          navigate urban environments with ease and confidence. Say goodbye to
          traffic frustrations and hello to smoother, more efficient journeys
          with StreetSense.
        </p>
        <h4 className="about-text-title"> Key Features </h4>

        <KeyFeatures
          title="Real-time Traffic Updates"
          description="Stay informed about traffic conditions, accidents, and road closures in real-time to plan your route accordingly. "
        />

        <KeyFeatures
          title="Intelligent Route Planning"
          description="Utilize advanced algorithms to find the fastest and most efficient route to your destination, considering current traffic conditions and historical data."
        />

        <KeyFeatures
          title="Live data from Traffic sensors"
          description="Access live traffic data feeds to visualize current road conditions and make informed decisions about your route."
        />

        <KeyFeatures
          title="Offline Access"
          description="Access essential features and navigation assistance even in areas with limited or no internet connectivity, ensuring uninterrupted guidance during your journey."
        />
      </div>
    </div>
  );
}

export default About;
