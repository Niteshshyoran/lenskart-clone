import React, { useState, useEffect } from "react";
import "./SharkTankBanner.css";

const images = [
  "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
  "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
  "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
  "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
  "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
];

const SharkTankBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shark-tank-banner">
      <h3 className="banner-heading">AS SEEN ON SHARK TANK</h3>
      <div className="banner-content">
        <img className="banner-image" src={images[currentIndex]} alt="Eyewear" />
        <div className="banner-text">
        </div>
      </div>
    </div>
  );
};

export default SharkTankBanner;
