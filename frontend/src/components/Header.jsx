import { useState } from "react";
import "./Header.css";
import Signup from "./SignUp";

function Header() {
  const [popup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(true);
  };
  const handleExit = () => {
    setPopup(false);
  };

  return (
    <header>
      {/* Upper Navbar */}
      <div className="upper-navbar">
        <div className="left-links">
          <a href="#">Do More, Be More</a>
          <a href="#">Store Locator</a>
          <a href="#">Singapore</a>
          <a href="#">UAE</a>
          <a href="#">John Jacobs</a>
          <a href="#">Aqualens</a>
          <a href="#">Cobrowsing</a>
          <a href="#">Engineering Blog</a>
          <a href="#">Partner With Us</a>
          <a href="#">Meet our Stars ⭐</a>
        </div>
        <div className="right-links">
          <a href="#">Contact Us</a>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="lower-navbar">
        <div className="logo">
          <img
            src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
            alt="Lenskart Logo"
          />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
        </div>
        <div className="nav-icons">
          <button className="nav-btn">Track Order</button>
          <button className="nav-btn" onClick={handleClick}>
            Sign In & Sign Up
          </button>
          {popup && (
            <div className="signup_container">
              <Signup onClose={handleExit} />
            </div>
          )}
          <button className="nav-btn">
            ❤️ Wishlist
          </button>
          <button className="nav-btn">
            🛒 Cart
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
