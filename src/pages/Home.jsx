import React from 'react'
import HeroSection from '../components/HeroSection'
import QuoteForm from '../components/QuoteForm'
import About from './About'
import Service from './Service'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuoteForm />
      <About />
      <Service />
      <Testimonial />
    </div>
  )
}

export default Home
