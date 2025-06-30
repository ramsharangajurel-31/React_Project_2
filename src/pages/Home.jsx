import React from 'react'
import HeroSection from '../components/HeroSection'
import QuoteForm from '../components/QuoteForm'
import About from './About'
import Service from './Service'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Footer from '../components/Footer'
import Project from './Project'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuoteForm />
      <About />
      <Service />
      <Testimonial />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
