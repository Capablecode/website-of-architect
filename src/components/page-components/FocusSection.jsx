import React from "react";
import "./FocusSection.css";

const FocusSection = () => {
  return (
    <div className="focus-section">
      <h2 className="focus__h2">Main Focus/Mission Statement</h2>
      <div className="focus-content">
        <div className="focus-item">
          <h1 className="number">1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>

        <div className="focus-item">
          <h1 className="number">2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;
