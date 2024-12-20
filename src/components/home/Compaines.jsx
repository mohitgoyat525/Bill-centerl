import React from 'react'
import { COMPANIES_LOGO } from '../../utils/helper'

const Compaines = () => {
  return (
    
      <div className='container'>
        <h2 className='font-normal text-[38px] max-xl:text-3xl max-md:text-2xl max-w-[584px] max-xl:pl-0 max-lg:max-w-none pt-16  max-md:pt-12 max-sm:pt-10 max-xl:text-center max-xl:mx-auto'>
          More than <span className='text-skyBlue font-bold'>80,000</span>+ companies trust bill central
        </h2>
        <div className='flex items-center gap-[58px] max-lg:gap-9 max-md:gap-5 mt-16 max-xl:mt-10 max-lg:mt-7 max-sm:mt-6 max-xl:overflow-x-scroll'>
          {COMPANIES_LOGO.map((item, i) => (
            <img className={`w-full transition-all ease-linear duration-200 hover:scale-90 cursor-pointer ${i === 6 ? 'max-w-[63px]' : 'max-w-[126px]'}`} key={i} src={item.logo} alt={item.alt}/>
          ))}
        </div>
      </div>
  
  )
}

export default Compaines