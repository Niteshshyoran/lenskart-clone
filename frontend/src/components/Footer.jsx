import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2>Buy The Best Eyewear From Lenskart</h2>
        <p>
          Lenskart is the leading e-commerce portal for eyewear in India. It has
          revolutionized the eyewear industry in the country with its
          omnichannel approach. From an ever-growing number of offline stores
          across major cities in the country to innovative integration of
          technology while purchasing online, Lenskart caters to every customer
          with several deals and offers.
        </p>
        <p>
          A one-stop online solution for purchasing eyewear and its accessories,
          Lenskart delivers them right at your doorstep with convenient payment
          methods.{" "}
          <span className="highlight">Sunglasses</span> as well as{" "}
          <span className="highlight">Eyeglasses</span> are available for men
          and women in a diverse array of styles and trendy colors. If you want
          to try out <span className="highlight">Contact Lenses</span>, pick the
          ones of your choice from the extensive variety of colored contact
          lenses from our online store.
        </p>
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Store Locator</li>
            <li>Buying Guide</li>
            <li>Frame Size</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>We Are Hiring</li>
            <li>Refer And Earn</li>
            <li>About Us</li>
            <li>Lenskart Coupons</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>FAQs</li>
            <li>Grievance Redressal</li>
            <li>Cardemi</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Download App</h3>
          <div className="app-links">
            <img src="https://static.lenskart.com/media/desktop/img/play-store.svg" alt="Google Play" />
            <img src="https://static.lenskart.com/media/desktop/img/app-store.svg" alt="App Store" />
          </div>
          <p>Download Lenskart App to buy Eyeglasses, Sunglasses and Contact Lenses</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>T & C | Privacy | Disclaimer</p>
        <p>Version 1.00 | Follow Us</p>
        <div className="social-icons">
          <img src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt="Facebook" />
          <img src="https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png" alt="Instagram" />
          <img src="https://static.vecteezy.com/system/resources/previews/016/716/467/non_2x/twitter-icon-free-png.png" alt="Twitter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
