import React from 'react'
import Hero from '../components/Hero.jsx'
import QuickHighlights from '../components/QuickHighlights.jsx'
import Gallery from './Gallery.jsx'
import Rooms from './Rooms.jsx'

const Home = () => {
  return (
    <>
    <Hero />
    <QuickHighlights />
    <Gallery />
    <Rooms /> 
    </>
  )
}

export default Home