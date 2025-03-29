import React, { useState } from "react";
import "./MegaDropdown.css"; // Add CSS for styling

const MegaDropdown = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuData = {
    "EYEGLASSES": [
      {
        title: "Men",
        items: ["Classic Eyeglasses", "Premium Eyeglasses", "Screen Eyeglasses"],
      },
      {
        title: "Our Top Picks",
        items: ["New Arrivals", "Best Seller", "Lenskart BLU Lenses", "Tinted Eyeglasses", "Progressive Eyeglasses"],
      },
      {
        title: "Frame Type",
        items: ["Rectangle Frames", "Wayfarer Frames", "Round Frames", "Aviator Frames", "Cat-Eye Frames", "Rimless Frames", "Halfrim Frames", "Geometric Frames"],
      },
      {
        title: "Collection",
        items: ["Switch Grip", "Gulmarg Collection", "Urban Edit", "Blend Edit", "Sleek Steel", "Switch - Magnetic Clips-On", "Air Flex", "Electro Punk", "Classic Acetate", "Matte Essentials"],
      },
      {
        title: "Brands",
        items: ["Vincent Chase", "Lenskart Air", "OJOS", "Lenskart STUDIO"],
      },
    ],
    "SCREEN GLASSES": [
      {
        title: "Men",
        items: ["Classic Screen Glasses", "Premium Screen Glasses"],
      },
    ],
    "KIDS GLASSES": [
      {
        title: "Kids Collection",
        items: ["New Arrivals", "Best Sellers", "Tinted Glasses", "Flexible Frames"],
      },
    ],
    "CONTACT LENSES":[

    ],
    "SUNGLASSES":[

    ],
    "HOME EYE-TEST":[

    ],
    "STORE LOCATOR":[

    ],
  };

  return (
    <nav className="category-nav">
     
      {Object.keys(menuData).map((category) => (
        <div
          key={category}
          className="nav-item"
          onMouseEnter={() => setActiveMenu(category)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <a href="#">{category}</a>
          {activeMenu === category && (
            <div className="mega-dropdown">
              {menuData[category].map((section, index) => (
                <div key={index} className="dropdown-section">
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {/*Additional Buttons */}
      <button class="category-btn">Blue Lens</button>
      <button class="category-btn">3D Try-On</button>
      <button class="category-btn">Frame Size</button>
    </nav>
  );
};

export default MegaDropdown;
