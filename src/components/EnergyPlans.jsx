import React from 'react'
import SectionHeading from '../common/SectionHeading'
import { ENERGY_LIST } from '../utils/Helper'
import CustomButton from "../common/CustomButton";
const EnergyPlans = () => {
  return (
    <div>
      <div className='pt-[162px] max-2xl:pt-32 max-xl:pt-24 max-lg:pt-20 max-md:pt-16 max-sm:pt-10 '>
        <div className='container'>
          <div className='flex gap-[75px] max-xl:gap-16 max-lg:gap-12 max-lg:flex-col'>
            <div className='w-6/12 max-lg:w-full'>
              <img src="/assets/images/webp/energy-plan-img.webp" alt="plans" />
            </div>
            <div className='w-6/12 max-lg:w-full'>
              <div>
                <div className='max-w-[409px] max-lg:mx-auto max-lg:max-w-none max-lg:text-center'>
                  <SectionHeading CommonHeadingBold='Switching Energy' NormalHeadingText='Made Simple'/>
                </div>
                <p className='pt-4 font-deepBlue font-normal text-base leading-[150%] max-w-[558px] max-lg:mx-auto max-lg:text-center'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
                <h3 className='text-2xl font-normal text-[#003459] pt-9 max-lg:pt-5 max-lg:text-center'>Benefits of Comparing Energy Plans</h3>
                <ul className='max-lg:text-center list-disc text-black-bean  list-inside flex flex-col gap-2 mt-7 max-lg:mt-5 max-md:mt-3'>{ENERGY_LIST.map((items, i) => (
                  <li key={i} className='text-base max-md:text-sm font-normal text-deepBlue'>{items}</li>
                ))}</ul>
                <div className='mt-[42px]'>
                  <CustomButton />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnergyPlans