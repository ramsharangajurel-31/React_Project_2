import React from 'react'
import { FaPaintBrush } from "react-icons/fa";
import { SiMaterialformkdocs } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";


const AboutCard = () => {
    const cards= [
        {   icon:<FaPaintBrush />,
            title:"CUSTOM DESIGNS",
            description:"We specialized in creating  bespoke joinery pieces tailored to your unique vision and style",
        },
         {  icon:<SiMaterialformkdocs />,
            title:"HIGH-QUALITY MATERIALS",
            description:"We use the finest timbers and materials to create durable and long-lasting products",
        },
         {  icon:<FaUserTie />,
            title:"EXPERIENCE PROFESSIONAL",
            description:"Our skilled joiners gives years of expertise and joy to each project,resulting in each quality",
        }

];
  return (
    
  <div className="cards-container">
      {cards.map((card, index) => (
    <div key={index} className="info-card">
        <div className='icons'>{card.icon}</div>
          <h5>{card.title}</h5>
          <p>{card.description}</p>
        </div>
      ))}
    
      
    </div>
  )
}

export default AboutCard;
