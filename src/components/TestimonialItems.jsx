import React from 'react';
import { CgProfile } from "react-icons/cg";


const TestimonialItems = () => {
    const Testimonial=[
        { name:"ALEX WONG",
          message: `We Hired John to build a partition wall and door in our garage. He did a fantastic job, 
          was very friendly and had good attention to 
          detail. I wouldn't hesitate to use him again or recommended to others!`,
          icons: <CgProfile />,
          
        },
        { 
        name: "MARIA GARCIA",
        message: `John was punctual and very professional. The quality of work exceeded our expectations, 
                     and he cleaned up everything afterwards. 
                     Highly recommend for any home improvement projects!`,
        icons: <CgProfile />,
},

       { 
        name: "DAVID LEE",
        message: `Excellent craftsmanship and great communication throughout the project. 
                    John took the time to explain all steps and delivered on time. 
                    Will definitely hire again!`,
        icons: <CgProfile />,
       },
    ];
  return (
    <div className='testimonial'>
        <h3>CLIENT <span>REVIEWS</span></h3>
        { Testimonial.map((item, index)=>( 
            <div key ={index} className ="testimonial-section">
                <p>"{item.message}"</p>
                <p className='test-icon'>{item.icons}</p>
                <h3>{item.name}</h3>
            </div>

        ))}
      
    </div>
  )
}

export default TestimonialItems;
