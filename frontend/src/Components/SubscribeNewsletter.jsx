import React, { useState } from "react";
import Notification from "./Notification";

function SubscribeNewsletter() {
  const [inputEmail, setInputEmail] = useState("");
  const [showInvalidEmailMessage, setShowInvalidEmailMessage] = useState(false);
  const [showSubscribedMessage, setShowSubscribedMessage] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
    setShowInvalidEmailMessage(false);
    setShowSubscribedMessage(false);
  };

  const Subscribe = () => {
    if (emailRegex.test(inputEmail)) {
      setShowSubscribedMessage(true);
      setInputEmail("");
      setTimeout(() => {
        setShowSubscribedMessage(false);
      }, 5000); 
    } else {
      setShowInvalidEmailMessage(true);
      setTimeout(() => {
        setShowInvalidEmailMessage(false);
      }, 5000); 
    }
  };

  return (
    <div className="ft-info-p2">
      <p className="ft-input-title">Stay Updated to our Newsletter</p>
      <input
        type="text"
        inputMode="email"
        className="ft-input"
        placeholder="Enter your email address"
        name="email"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
      />
      <button
        className="text-appointment-btn"
        type="button"
        onClick={Subscribe}
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "8px",
          padding: "8px 16px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <strong>Subscribe</strong>
      </button>

      {showInvalidEmailMessage && (
        <Notification message="Invalid Email Address !" type="error" />
      )}
      {showSubscribedMessage && (
        <Notification message="Subscribed to Newsletter !" type="success" />
      )}
    </div>
  );
}

export default SubscribeNewsletter;
