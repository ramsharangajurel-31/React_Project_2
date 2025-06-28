import React from 'react'
import HeroSection from '../components/HeroSection'
import QuoteForm from '../components/QuoteForm'
import About from './About'
import Service from './Service'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuoteForm />
      <About />
      <Service />
    </div>
  )
}

export default Home
