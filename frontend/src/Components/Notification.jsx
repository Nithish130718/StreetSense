import React, { useState } from "react";
import "../Styles/Notification.css";

function Notification({ message, type }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`notification ${isVisible ? "visible" : "hidden"} ${type}`}>
      <span className="notification-message">{message}</span>
      <button className="notification-close-btn" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
}

export default Notification;
