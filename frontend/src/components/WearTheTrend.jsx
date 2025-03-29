import React, { useState } from "react";
import "./WearTheTrend.css";

const glassesData = [
  {
    id: 1,
    name: "Round",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png",
  },
  {
    id: 2,
    name: "Cat-Eye",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg",
  },
  {
    id: 3,
    name: "Clubmaster",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
  },
  {
    id: 4,
    name: "Transparent",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg",
  },
  {
    id: 5,
    name: "Blend Edit",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg",
  },
  {
    id: 6,
    name: "Air Clip On",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
  },
  {
    id: 7,
    name: "Air Flex",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg",
  },
  {
    id: 8,
    name: "Retro Aviator",
    img: "https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg",
  },
];

const ITEMS_PER_PAGE = 4;

const WearTheTrend = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(glassesData.length / ITEMS_PER_PAGE);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleGlasses = glassesData.slice(
    currentIndex * ITEMS_PER_PAGE,
    currentIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <div className="trend-container">
      {/* Left Text Section */}
      <div className="trend-text">
        <h2>
          WEAR THE <span className="bold">TREND</span>
        </h2>
        <p>Our hottest collections</p>
      </div>

      {/* Glasses Carousel */}
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>&#10094;</button>

        {visibleGlasses.map((glass) => (
          <div key={glass.id} className="glasses-item">
            <img src={glass.img} alt={glass.name} />
            <p>{glass.name}</p>
            <button className="explore-btn">Explore</button>
          </div>
        ))}

        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default WearTheTrend;
