import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../styles/style.css";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <div className='top-head-icons'>
                <ul>
             <li> <FaFacebookF  /></li>
             <li> <FaInstagramSquare /></li>
             <li> <FaTwitter /></li>
                </ul>
                </div>
            </div>
            <div className='col-md-4 logo'>
             <img src='logo.jpeg' alt="logo"/>
             <span className="logo-main">CIARDI</span>
             <span className="logo-sub">JOINERY</span>
            </div>
        
        <div className='col-md-4'>
          <div className="tophead-call">
            <h5>Call: 0450 455 724</h5>
          </div>

        </div>
      </div>
      </div>
      
    </div>
  )
}

export default TopHeader;
