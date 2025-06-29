import React, { useState } from "react";
import "../styles/style.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className={isOpen ? "bar open" : "bar"}></div>
            <div className={isOpen ? "bar open" : "bar"}></div>
            <div className={isOpen ? "bar open" : "bar"}></div>
          </div>

          {/* Navigation Links */}
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li><a href="#" className="nav-link active"><span>HOME</span></a></li>
            <li><a href="#" className="nav-link">ABOUT US</a></li>
            <li><a href="#" className="nav-link">SERVICES</a></li>
            <li><a href="#" className="nav-link">PROJECTS</a></li>
            <li><a href="#" className="nav-link">TESTIMONIALS</a></li>
            <li><a href="#" className="nav-link">CONTACT US</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
