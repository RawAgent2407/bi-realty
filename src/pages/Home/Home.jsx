import React from 'react'
import Nav from '../../components/Nav/Nav'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import ExploreSlider from '../../components/ExploreSlider/ExploreSlider'
import FutureHomeSection from '../../components/FutureHomeSection/FutureHomeSection'
import LocationSection from '../../components/LocationSection/LocationSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import InvestingCardsSection from '../../components/InvestingCardsSection/InvestingCardsSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import './Home.css'

// Import JSON data
import heroSliderData from '../../data/home/heroSlider.json'
import exploreSliderData from '../../data/home/exploreSlider.json'
import futureHomeData from '../../data/home/futureHomeSection.json'
import locationData from '../../data/home/locationSection.json'
import investingCardsData from '../../data/home/investingCardsSection.json'
import contactData from '../../data/shared/contactSection.json'
import footerData from '../../data/shared/footerSection.json'
import navData from '../../data/shared/nav.json'

const Home = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Navbar */}
      <Nav data={navData} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroSlider data={heroSliderData} />
      </section>

      {/* Explore Section */}
      <section className="">
        <ExploreSlider data={exploreSliderData} />
      </section>

      {/* Future Home */}
      <section className="">
        <FutureHomeSection data={futureHomeData} />
      </section>

      {/* Location */}
      <section className="">
        <LocationSection data={locationData} />
      </section>

      {/* Investing Cards */}
      <section className="">
        <InvestingCardsSection data={investingCardsData} />
      </section>
      {/* Contact */}
      <section className="footer-wrapper lg:pt-20   lg:p-20" id="contact">
        <ContactSection data={contactData} />

        {/* Footer */}
        <FooterSection data={footerData} />
      </section>
    </div>
  )
}

export default Home
