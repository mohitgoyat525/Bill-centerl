import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Compaines from '../components/home/Compaines'
import EnergyPlans from '../components/home/EnergyPlans'
import SwitchSteps from '../components/home/SwitchSteps'
import SimpleSlider from '../components/home/SwitchStepsSlider'
import UtilitySection from '../components/home/UtilitySection'
import ChooseUs from '../components/home/ChooseUs'
import TestimonialsSlider from '../components/home/TestinomialsSlider'
import Faq from '../components/home/Faq'

const Home = () => {
  return (
      <>
          <HeroSection />
          <Compaines />
          <EnergyPlans />
          <SwitchSteps />
          <SimpleSlider />
          <UtilitySection />
          <ChooseUs />
          <TestimonialsSlider />
          <Faq/>
      </>
  )
}

export default Home