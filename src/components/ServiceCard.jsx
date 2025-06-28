import React from 'react'

const ServiceCard = () => {
    const card =[
        {
            image:"./service/service1.png",
            title:"Cabinet Marketing ",
            description:" ",
        },
         {
            image:"./service/service2.png",
            title:"Custom Joinery ",
            description:" ",
        },
         {
            image:"./service/service3.png",
            title:"Vanities ",
            description:" ",
        },
         {
            image:"./service/service1.png",
            title:"Cabinet Marketing ",
            description:" ",
        },
         {
            image:"./service/service1.png",
            title:"Cabinet Marketing ",
            description:" ",
        },
         {
            image:"./service/service1.png",
            title:"Cabinet Marketing ",
            description:" ",
        },

    ]
  return (
    <div>
        <div className="cards-container">
      {card.map((card, index) => (
    <div key={index} className="info-card">
        <div className='image'>{card.image}</div>
          <h5>{card.title}</h5>
          <p>{card.description}</p>
        </div>
      ))}
    
      
    </div>
      
    </div>
  )
}

export default ServiceCard
