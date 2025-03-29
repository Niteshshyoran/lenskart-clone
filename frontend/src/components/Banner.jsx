import React, { useState, useEffect } from "react";
import "./Banner.css";

const trendingImages = [
    "https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif",
    "https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif",
    "https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif",
];

const aquacolorImages = [
  "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
  "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
  "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
];

const Banner = () => {
  const [trendingIndex, setTrendingIndex] = useState(0);
  const [aquacolorIndex, setAquacolorIndex] = useState(0);

  useEffect(() => {
    const trendingInterval = setInterval(() => {
      setTrendingIndex((prev) => (prev + 1) % trendingImages.length);
    }, 1000);

    const aquacolorInterval = setInterval(() => {
      setAquacolorIndex((prev) => (prev + 1) % aquacolorImages.length);
    }, 1000);

    return () => {
      clearInterval(trendingInterval);
      clearInterval(aquacolorInterval);
    };
  }, []);

  return (
    <div className="banner-container">
      
      {/* Trending Sunglasses Section */}
      <div className="banner-section trending">
        <h2 className="banner-heading">TRENDING SUNGLASSES</h2>
        <div className="banner-box">
          <div className="banner-image-container">
            <img src={trendingImages[trendingIndex]} alt="Trending Sunglasses" className="banner-image" />
          </div>
        </div>
      </div>

      {/* AquaColor Lenses Section (Full Width) */}
      <div className="banner-section aquacolor">
        <h2 className="banner-heading">AQUACOLOR - GLAM UP WITH COLOR LENSES</h2>
        <div className="banner-content full-width">
          <img src={aquacolorImages[aquacolorIndex]} alt="Aqua Color Lenses" className="banner-image full-width-image" />
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
