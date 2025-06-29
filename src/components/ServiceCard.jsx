import React from 'react'

const ServiceCard = () => {
    const card =[
        {
            image:"service/service1.png",
            title:"Cabinet Marketing ",
            description:"We specialize in creating custom designs that cabinetry that combines functionally with timeless beauty . ",
        },
         {
            image:"service/service2.png",
            title:"Custom Joinery ",
            description:"Our team of expert artisans is dedicated to delivering the highest quality in every piece we create.",
        },
         {
            image:"service/service3.png",
            title:"Vanities ",
            description:"We specialize in designing and crafting bespoke vanities that combine modern aesthetics with timeless functionality. ",
        },
         {
            image:"service/service4.png",
            title:"TV units",
            description:"We use responsibly source materials and sustainable practices to ensure our tv units are also eco friendly as they are stunning.",

        },
         {
            image:"service/service5.png",
            title:"Hair Salons/Barber Shops ",
            description:"Our team of professional stylists and barbers are dedicated to delivering precision and creativity in every haircut and styles.",
        },
         {
            image:"service/service1.png",
            title:"Shop fit outs ",
            description:" Our Team of expert designers and craftsmen are dedicated to delivering the highest quality in every piece we create.",
        },

    ]
   return (
    <>
    <div className="service-head">
      <h2>OUR<span> SERVICES</span></h2>
    <div className="service-section">
      {card.map((card, index) => (
        <div key={index} className="service-cardsection">
          <img src={`/${card.image}`} alt={card.title} className="service-img" />
          <h5>{card.title}</h5>
          <p>{card.description}</p>
           <button className="service-cardbutton">READ MORE</button>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};
export default ServiceCard;