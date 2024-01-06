import React from 'react'
import AboutUpSection from '../components/AboutPageComponents/aboutUpSection'
import NotMeanSection from '../components/notMeanSection'
import AboutDownSection from '../components/AboutPageComponents/aboutDownSection'
import ReasonToShopSection from '../components/AboutPageComponents/reasonToShopSection'

function AboutPage() {
  return (
    <>
       <NotMeanSection/>
       <AboutUpSection/>
      <AboutDownSection/>
      <ReasonToShopSection/>
    </>
  )
}

export default AboutPage