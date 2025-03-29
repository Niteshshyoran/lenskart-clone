import "./Carousel.css";
import React from "react";

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-wildgear.png" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-breaktheframe.png" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-twyst.png" alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-mavericks.png" alt="Fourth slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-headspace.png" alt="Fifth slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};


export default Carousel;
