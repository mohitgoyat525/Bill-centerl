import React from 'react'

const SectionHeading = ({ CommonHeading, CommonHeadingBold, NormalHeadingText }) => {
  return (
      <div>
          <h2 className='text-5xl max-xl:text-[40px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-normal font-deepBlue'>{CommonHeading} <span className='font-bold'>{CommonHeadingBold}</span> <span>{NormalHeadingText}</span></h2>
    </div>
  )
}

export default SectionHeading