import React from "react";
import InfoCard from "./InfoCard";
import "../Styles/Info.css";
import { Clock, Route, Radio,Wifi, ShieldCheck, PersonStanding } from 'lucide-react';
function Info() {
  return (
    <div className="info-section" id="key-features">
      <div className="info-title-content">
        <h3 className="info-title">
          <span> What we do? What do we offer? </span>{" "}
        </h3>
      </div>
      <p className="info-description">
        At StreetSense, we are dedicated to revolutionizing urban mobility
        through innovative solutions and community engagement. Our mission is to
        optimize city transportation, minimize congestion, and enhance safety on
        urban streets. We are committed to providing efficient and reliable
        navigation solutions, ensuring that everyone can navigate urban
        environments with ease and confidence.
      </p>

      <div className="info-cards-content">
        <InfoCard
          title="Real-time Traffic Updates"
          description="Stay informed about traffic conditions, accidents, and road closures in real-time to plan your route accordingly. StreetSense provides up-to-date traffic information, allowing users to make informed decisions and avoid traffic delays."
          icon={<Clock/>}
        />

        <InfoCard
          title="Intelligent Route Planning"
          description="Utilize advanced algorithms to find the fastest and most efficient route to your destination, considering current traffic conditions and historical data. StreetSense offers personalized route suggestions, helping users navigate through city streets with ease."
          icon={<Route/>}
        />

        <InfoCard
          title="Live data from Traffic sensors"
          description="Access live traffic data feeds to visualize current road conditions and make informed decisions about your route."
          icon={<Radio/>}
        />

        <InfoCard
          title="Offline Access"
          description="Access essential features and navigation assistance even in areas with limited or no internet connectivity, ensuring uninterrupted guidance during your journey."
          icon={<Wifi/>}
        />

        <InfoCard
        title = "Safety Features"
        description = "Receive alerts for hazardous driving conditions, speed limits, and other safety concerns to promote safe driving practices and minimize the risk of accidents."
        icon = {<ShieldCheck/>}
        />

        <InfoCard
        title = "Community Reporting"
        description = "Contribute to the community by reporting traffic incidents, hazards, or road closures to help fellow commuters and improve overall traffic management."
        icon = {<PersonStanding/>}
        />

      </div>
    </div>
  );
}

export default Info;
