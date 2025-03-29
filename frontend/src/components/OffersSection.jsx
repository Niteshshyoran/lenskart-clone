import React from "react";
import "./OffersSection.css";

const OffersSection = () => {
  return (
    <div className="offers-container">
      {/* Free Lens Replacement Section */}
      <div className="offer">
        <h3 className="offer-title">FREE LENS REPLACEMENT AT STORES</h3>
        <div className="offer-content">
          <img
            src="https://static1.lenskart.com/media/desktop/img/16-Mar-25/desktop-free.png"
            alt="Lens Replacement Offer"
            className="offer-image"
          />
        </div>
      </div>

      {/* Book Eye Test at Home Section */}
      <div className="offer">
        <h3 className="offer-title">BOOK EYE TEST AT HOME</h3>
        <div className="offer-content">
          <img
            src="https://static5.lenskart.com/media/uploads/hechome11.png"
            alt="Eye Test at Home"
            className="offer-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
