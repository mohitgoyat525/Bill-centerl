import React from 'react'
import { BUTTON_ARROW, LIKED_ICON } from '../../utils/icons'
import SectionHeading from '../../common/SectionHeading'
import { CHOOSEUS_CARD_LIST } from '../../utils/helper'

const ChooseUs = () => {
  return (
      <div className='container pt-[162px] max-2xl:pt-32 max-xl:pt-24 max-lg:pt-16 max-md:pt-12 max-sm:pt-10 max-lg:px-5'>
          <div className="text-center pb-0.5">
              <SectionHeading CommonHeading="Why Choose Us for" CommonHeadingBold="Utilities"/>
              <div className='max-w-[620px] mx-auto pt-4'>
                  <p className='max-w-[620px] mx-auto text-center text-base font-normal text-deepBlue opacity-90'>This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!</p>
              </div>
          </div>
          <div className='pt-14 flex max-lg:flex-col max-md:pt-7 max-sm:pt-5'>
              <div className="w-5/12 flex justify-center max-lg:w-full items-center">
                  <div className='p-10 bg-darkGreen rounded max-w-[424px] min-h-[596px] max-lg:min-h-[200px] max-md:max-w-[310px]  max-md:p-7'>
                      <div className='pb-0.5 thumb-star-icon'> <LIKED_ICON/> </div>
                      <div className='pt-7'>
                          <h3 className='text-2xl font-normal leading-custom-2xl text-white max-md:text-xl max-sm:text-lg'>Tailored Recommendations</h3>
                          <p className='text-white max-w-[344px] text-base pt-3 opacity-90 pb-5 max-sm:text-sm max-sm:pt-1'>Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.</p>
                          <button className='py-3 px-6 bg-white rounded-full mt-0.5 button-next-arrow overflow-hidden'><BUTTON_ARROW /></button>
                      </div>
                  </div>
              </div>
              <div className="w-7/12 max-lg:w-full">
                  <div className='flex flex-wrap'>
                      {CHOOSEUS_CARD_LIST.map((obj, i) => (
                          <div key={i} className='p-3 w-6/12 max-md:w-full max-w-[334px] mx-auto'>
                              <div className='shadow-box p-6 max-xl:p-3 hover:bg-darkGreen group duration-300 ease-linear transition-all h-[286px] max-sm:h-[230px] border border-green-white rounded'>
                                  <div className='pb-0.5 utility-icon'>{obj.icon}</div>
                                  <h3 className='group-hover:text-white pt-4 text-deepBlue text-2xl max-sm:text-xl font-normal max-xl:pt-2'>{obj.title}</h3>
                                  <p className='text-base font-normal leading-custom-4xl text-deepBlue max-sm:text-sm group-hover:text-white max-w-[286px] pt-3'>{obj.discription}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ChooseUs