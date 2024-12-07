import React from 'react'
import { WHITE_ARROW } from '../utils/Icon'

const CustomButton = () => {
  return (
      <>
      <button className='rounded-b-full font-helvetica py-4 px-[22px] border border-solid rounded-e-full text-base font-semibold text-white max-w-[137px] bg-skyBlue
           my-2 me-2 flex items-center gap-3 transition-all ease-linear duration-200 hover:bg-darkGreen hover-text-white'>Compare <WHITE_ARROW/> </button>
      </>
  )
}

export default CustomButton