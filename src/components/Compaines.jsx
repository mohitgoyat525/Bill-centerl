import React from 'react'
import { COMPANIES_LOGO } from '../utils/Helper'

const Compaines = () => {
  return (
    <div>
      <div className='container'>
        <h2 className='font-helvetica font-normal text-[38px] max-xl:text-3xl max-md:text-2xl max-w-[584px] max-lg:text-center max-lg:max-w-none pt-14 max-xl:pt-10 max-lg:pt-7 max-md:pt-5'>
          More than <span className='text-skyBlue font-bold'>80,000+</span> companies trust bill central
        </h2>
        <div className='flex items-center justify-evenly mt-16 max-xl:mt-10 max-lg:mt-7 max-sm:mt-6 max-lg:flex-wrap max-sm:flex-col max-lg:gap-7'>
          {COMPANIES_LOGO.map((item, i) => (
            <img className={`w-full ${i === 6 ? 'max-w-[63px]' : 'max-w-[126px]'}`} key={i} src={item.logo} alt={item.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Compaines