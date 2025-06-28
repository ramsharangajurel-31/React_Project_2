import React from 'react'
import AboutCard from '../components/AboutCard'

const About = () => {
  return (
    <div className='about-section'>
      <AboutCard />
      <div className="about-image">
        <img src='about.png' alt='aboutimg'/>
      
    
    <div className="experience-card">
         <strong>8+</strong><br />
        <span>Year of<br/>Experience</span>

        </div> 

    </div>
    <div className="about-text">
        <div className="about-text-header">
            <h5>WELCOME TO</h5>
            <h3>CIARDI <span>JOINERY</span></h3>
            </div>
              
              <div className="about-text-para">

           <b>  <p>Ciardi Joinery is a small comoany in the Hawkesbury recently 
            opened and is quickly making a Positive <br/> approach to quality over quantity</p></b>
            <p>
            At <b>Ciardi Joinery,</b> we redefine craftsmanship for the modern age. With a blend of 
            traditional techniques and cutting-edge<br/> technology, we create bespoke joinery 
            solutions that are both innovative and timeless, with a mission to provide exceptional 
            joinery<br/> services that combine quality, creativity, and functionality. Today, we're proud
             to be industry leaders, known for our precision,<br/> attention to detail, and commitment to 
             excellence.<br/></p>

             <p> Every project at <b> Ciardi Joinery </b>is a collaboration. We listen to your ideas,
           understand your needs, and work closely with you to <br/>deliver custom woodwork that
           exceeds your expectations. From unique furniture pieces to comprehensive cabinetry
         solutions, our<br/> work is a reflection of your vision and our expertise.</p>

         <p>Sustainability is at the core of our values. We use eco-friendly materials and 
        processes, ensuring our creations are as sustainable as<br/> they are beautiful. When you
         choose us, you're choosing quality,
         innovation, and a commitment to a greener future.</p>
      </div>
    </div>
     <div className="about-button">
        <button type="button" class="btn2 btn-danger">ABOUT US</button>
        </div>
    </div>
  )
}

export default About
