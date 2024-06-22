import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">StreetSense</Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to StreetSense, your ultimate urban mobility companion.
          StreetSense is a traffic management solution designed to optimize your
          commute, minimize congestion, and enhance safety on city streets. With
          real-time traffic updates, intelligent route planning, and
          personalized navigation assistance, StreetSense empowers you to
          navigate urban environments with ease and confidence. Say goodbye to
          traffic frustrations and hello to smoother, more efficient journeys
          with StreetSense.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal and traffic-related
          information. We ensure secure data handling, and you can trust that
          your information is treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using our service, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with other
          users, and the responsibilities of both parties. It's essential to
          understand these terms to ensure a smooth experience for all.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          StreetSense is designed to simplify urban mobility for everyone. We
          work by: - Real-time Traffic Updates: Providing up-to-date information
          about traffic conditions. - Intelligent Route Planning: Finding the
          most efficient routes based on current traffic data. - Personalized
          Navigation: Offering customized navigation guidance tailored to your
          needs.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2023-2024 StreetSense. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
