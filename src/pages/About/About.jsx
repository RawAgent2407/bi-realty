import React from 'react'
import Nav from '../../components/Nav/Nav'
import ProjectHero from '../../components/ProjectHero/ProjectHero'
import ImpactSection from '../../components/ImpactSection/ImpactSection'
import VisionSection from '../../components/VisionSection/VisionSection'
import ExploreSlider from '../../components/ExploreSlider/ExploreSlider'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import AboutImgs from '../../components/AboutImgs/AboutImgs'

// Import JSON data
import projectHeroData from '../../data/about/projectHero.json'
import impactData from '../../data/about/impactSection.json'
import visionData from '../../data/about/visionSection.json'
import aboutImgsData from '../../data/about/aboutImgs.json'
import exploreSliderData from '../../data/home/exploreSlider.json'
import contactData from '../../data/shared/contactSection.json'
import footerData from '../../data/shared/footerSection.json'
import navData from '../../data/shared/nav.json'

const About = () => {
  return (
    <>
      <Nav data={navData} />
      <ProjectHero data={projectHeroData} />
      <ImpactSection data={impactData} />
      <VisionSection data={visionData} />
      <AboutImgs data={aboutImgsData} />
      <ExploreSlider data={exploreSliderData} />
      <section className="footer-wrapper lg:pt-20   lg:p-20" id="contact">
        <ContactSection data={contactData} />
        <FooterSection data={footerData} />
      </section>
    </>
  )
}

export default About
