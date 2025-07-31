import React from 'react'
import Nav from '../../components/Nav/Nav'
import ProjectHero from '../../components/ProjectHero/ProjectHero'
import ImpactSection from '../../components/ImpactSection/ImpactSection'
import VisionSection from '../../components/VisionSection/VisionSection'
import TabsSection from '../../components/TabsSection/TabsSection'
import FutureHomeSectionProject from '../../components/FutureHomeSectionProject/FutureHomeSectionProject'
import BigVideoSection from '../../components/BigVideoSection/BigVideoSection'
import DarkFooterSection from '../../components/DarkFooterSection/DarkFooterSection'

// Import JSON data
import projectHeroData from '../../data/RajpathEnclave/projectHero.json'
import impactData from '../../data/RajpathEnclave/impactSection.json'
import visionData from '../../data/RajpathEnclave/visionSection.json'
import tabsData from '../../data/RajpathEnclave/tabsSection.json'
import futureHomeData from '../../data/RajpathEnclave/futureHomeSection.json'
import bigVideoData from '../../data/RajpathEnclave/bigVideoSection.json'
import navData from '../../data/shared/nav.json'
import AmenitiesSection from '../../components/AmenitiesSection'

function RajpathEnclave() {
  return (
    <>
      <Nav data={navData} />
      <ProjectHero data={projectHeroData} />
      <ImpactSection data={impactData} />
      <VisionSection data={visionData} />
      <TabsSection data={tabsData} />
     
      <AmenitiesSection />
      <div className="lg:my-10">
        <FutureHomeSectionProject data={futureHomeData} />
      </div>
      <BigVideoSection data={bigVideoData} />
      <section
        className="footer-wrapper lg:pt-20 dark-footer-wrapper   "
        id="contact"
      >
        <DarkFooterSection />
      </section>
    </>
  )
}

export default RajpathEnclave
