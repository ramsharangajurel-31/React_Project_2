import React from 'react';
import { CgProfile } from "react-icons/cg";
import useEmblaCarousel from 'embla-carousel-react';
// import '../styles/testimonial.css'; // make sure CSS is loaded

const TestimonialItems = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const testimonials = [
    {
      name: "ALEX WONG",
      message: `We hired John to build a partition wall and door in our garage. He did a fantastic job, 
      was very friendly and had good attention to detail. I wouldn't hesitate to use him again or recommend to others!`,
      icon: <CgProfile />,
    },
    {
      name: "MARIA GARCIA",
      message: `John was punctual and very professional. The quality of work exceeded our expectations, 
      and he cleaned up everything afterwards. Highly recommend for any home improvement projects!`,
      icon: <CgProfile />,
    },
    {
      name: "DAVID LEE",
      message: `Excellent craftsmanship and great communication throughout the project. 
      John took the time to explain all steps and delivered on time. Will definitely hire again!`,
      icon: <CgProfile />,
    },
  ];

  return (
    <div className="testimonial">
      <h3>CLIENT <span>REVIEWS</span></h3>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="testimonial-section">
                <p>"{item.message}"</p>
                <p className="test-icon">{item.icon}</p>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialItems;
