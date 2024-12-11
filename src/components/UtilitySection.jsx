import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { ACCORDION_ICON, BULP_ICON } from '../utils/icons';
import { ACCORDION_DATA_LIST } from '../utils/helper';

const UtilitySection = () => {
    // State to track which accordion item is expanded
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Function to toggle accordion state for a specific index
    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };


    return (
        <div>
            <div className='pt-[162px] max-2xl:pt-32 max-xl:pt-24 max-lg:pt-16 max-md:pt-12 max-sm:pt-10'>
                <div className='container'>
                    <div className='flex items-center max-xl:flex-col gap-[73px] max-2xl:gap-7 max-xl:justify-center'>
                        <div className='w-6/12 max-lg:w-full'>
                            <div className='max-w-[456px] max-xl:max-w-none max-xl:text-center'>
                                <SectionHeading CommonHeading='Comprehensive Utility' CommonHeadingBold='Comparisons' />
                            </div>
                            <div className='accordion-parent pt-12 max-lg:pt-7 max-md:pt-5 max-xl:mx-auto max-xl:max-w-[558px]'>
                                {ACCORDION_DATA_LIST.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`max-w-[558px] border border-solid border-[#0000001A] p-4 max-sm:p-2 shadow-[0px_0px_13.9px_0px_#0000001A] mb-4 transition-all duration-300 ${expandedIndex === index ? 'bg-lightGray' : ''
                                            }`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-6 max-sm:gap-3'>
                                                <div className='w-16 h-16 max-sm:w-9 max-sm:h-9 rounded-full flex items-center justify-center bg-lightSkyBlue'>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className='text-deepBlue font-normal text-2xl max-md:text-lg'>{item.title}</p>
                                                    {expandedIndex === index && (
                                                        <p className='max-md:text-sm mt-4 text-base font-normal text-deepBlue max-w-[442px]'>
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div
                                                className={`accordion-icon transition-transform duration-300 cursor-pointer ${expandedIndex === index ? 'rotate-180' : ''
                                                    }`}
                                            >
                                                <ACCORDION_ICON />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-6/12 max-lg:w-full'>
                            <img src="/assets/images/webp/utlity-explenation-img.webp" alt="utility-img" className='pointer-events-none max-xl:mx-auto w-full max-w-[580px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UtilitySection;
