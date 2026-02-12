import React from 'react'
import Hero from '../components/Hero.jsx'
import QuickHighlights from '../components/QuickHighlights.jsx'
import Rooms from './Rooms.jsx'
import Gallery from './Gallery.jsx'
import FoodSection from '../components/FoodSection.jsx'
import NearbyPlaces from '../components/NearbyPlaces.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Rules from '../components/Rules.jsx'
import FAQ from '../components/FAQ.jsx'
import ContactCTA from '../components/ContactCTA.jsx'

const Home = () => {
  return (
    <>
      {/* 1. HERO - First Impression, Hook */}
      <section id="home">
        <Hero />
      </section>
      
      {/* 2. QUICK HIGHLIGHTS - Why Choose Us (2 second decision) */}
      <section id="highlights">
        <QuickHighlights />
      </section>
      
      {/* 3. ROOMS - Main Product/Service (Core offering) */}
      <section id="rooms">
        <Rooms />
      </section>
      
      {/* 4. GALLERY - Visual Proof (See what you get) */}
      <section id="gallery">
        <Gallery />
      </section>
      
      {/* 5. FOOD - Lifestyle & Comfort (Important for girls) */}
      <section id="food">
        <FoodSection />
      </section>
      
      {/* 6. LOCATION - Convenience (Colleges, Market nearby) */}
      <section id="location">
        <NearbyPlaces />
      </section>
      
      {/* 7. TESTIMONIALS - Social Proof (Real experiences) */}
      <section id="testimonials">
        <Testimonials />
      </section>
      
      {/* 8. RULES - Transparency & Trust (Clear expectations) */}
      <section id="rules">
        <Rules />
      </section>
      
      {/* 9. FAQ - Objection Handling (Last minute questions) */}
      <section id="faq">
        <FAQ />
      </section>
      
      {/* 10. CONTACT CTA - Conversion (Final push) */}
      <section id="contact">
        <ContactCTA />
      </section>
    </>
  )
}

export default Home