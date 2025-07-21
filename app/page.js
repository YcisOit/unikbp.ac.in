"use client"
import React from 'react'

import HomeSlider from './components/HomeSlider'
import ResourceGrid from './components/ResourceGrid'
import FactsAndVideo from './components/FactsAndVideo'
import UniversitySection from './components/UniversitySection'
import YouTubeVideoSection from './components/YouTubeVideoSection'
import EnrichedCurriculumSection from './components/EnrichedCurriculumSection'
import SkillDevelopmentCenter from './components/SkillDevelopmentCenter'
import RecruitmentsSection from './components/RecruitmentsSection'
import Home from './components/Alumni'
import Alumni1 from './components/Alumni1'

const page = () => {
  return (
    <div>
      
        <HomeSlider/>
        <ResourceGrid/>
        <FactsAndVideo/>
        <UniversitySection/>
        <YouTubeVideoSection/>
        <EnrichedCurriculumSection/>
    
        <Alumni1/>
     
        <RecruitmentsSection/>
      
       </div>
  )
}

export default page