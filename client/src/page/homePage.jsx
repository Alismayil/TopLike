import React from 'react'
import Header from '../components/HomePageComponents/header'
import InformSection from '../components/HomePageComponents/informSection'
import OnlyOnlineSection from '../components/HomePageComponents/onlyOnlineSection'
import HomeFilterBoxsSection from '../components/HomePageComponents/homeFilterBoxsSection'
import LatestNewSection from '../components/HomePageComponents/latestNewSection'
import NewProductSection from '../components/HomePageComponents/newProductSection'

function HomePage() {
  return (
    <>
        <Header/>
        <InformSection/>
        <NewProductSection/>
        <OnlyOnlineSection/>
        <HomeFilterBoxsSection/>
        <LatestNewSection/>
    </>
  )
}

export default HomePage