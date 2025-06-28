import React from 'react';
import "../styles/style.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar ">
        <div className="container">
            <ul>
              <li>
                <a className="nav-link active" aria-current="page" href="#" ><span>HOME</span></a>
              </li>
              <li>
                <a className="nav-link active" aria-current="page" href="#" >ABOUT US</a>
              </li>
              <li>
                <a className="nav-link active" aria-current="page" href="#" >SERVICES</a>
              </li>
              <li>
                <a className="nav-link active" aria-current="page" href="#" >PROJECTS</a>
              </li>
              <li>
                <a className="nav-link active" aria-current="page" href="#" >TESTIMONIALS</a>
              </li>
              <li>
                <a className="nav-link active" aria-current="page" href="#" >CONTACT US</a>
              </li>
              </ul>
            
      </div>
      </nav>
    </header>
  );
};

export default Header;
