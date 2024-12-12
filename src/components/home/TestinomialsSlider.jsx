import React from 'react'
import { TESTIMONIALS_SLIDER_LIST } from '../../utils/helper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { NEXT_ARROW, PREV_ARROW } from '../../utils/icons';
import SectionHeading from '../../common/SectionHeading';

const TestimonialsSlider = () => {
    return (
        <div>
            <div className='max-w-[1140px] mx-auto w-full px-4 xl:mt-[162px] lg:mt-28 md:mt-20 sm:mt-14 mt-6 relative'>
                <div className='flex items-center justify-center'>
                    <SectionHeading CommonHeading="Our" CommonHeadingBold='Testimonials' />
                    </div>
                <p className='text-center max-w-[490px] mx-auto text-base font-normal text-deepBlue opacity-90 pt-4'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
                <div className="max-w-[1140px] mx-auto relative mt-14 max-xl:mt-10 max-md:mt-7 max-sm:mt-4">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        centeredSlides={true}
                        centerInsufficientSlides={true}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        pagination={true}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                centeredSlides: true,
                                pagination: true,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                                pagination: true
                            },
                            1280: {
                                slidesPerView: 3,
                                centeredSlides: true,
                                pagination: true,
                            },
                        }}>
                        {TESTIMONIALS_SLIDER_LIST.map((item, index) => (
                            <SwiperSlide key={index} className="max-w-[364px] h-[256px]">
                                <div className="border shadow-customOne border-darkTeal border-opacity-[10%] rounded-lg p-4 flex flex-col justify-between h-full text-center">
                                    <div className='flex gap-2 lg:mb-6 mb-4'>
                                        <img src={item.userImg} className="lg:w-[60px] w-12 rounded-full cursor-pointer" />
                                        <div className="text-start">
                                            <h4 className="xl:text-2xl lg:text-xl text-lg !leading-[150%]">{item.name}</h4>
                                            <a className='text-black opacity-[50%] !leading-[150%]' href="/">{item.userName}</a>
                                        </div>
                                    </div>
                                    <img className='max-w-[99px]' src={item.rateimg} alt="rating" />
                                    <p className="lg:text-base text-start text-sm text-gray-600 mt-2 max-w-xs !leading-[150%]">{item.discription}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-prev max-w-max absolute top-24 xl:block max-xl:hidden -left-20 cursor-pointer border px-4 py-3 rounded-full hover:bg-black arrows-icon  transition-all ease-linear duration-200"> <PREV_ARROW /> </div>
                    <div className="custom-next max-w-max absolute top-24 xl:block max-xl:hidden -right-20 cursor-pointer border px-4 py-3 rounded-full hover:bg-black arrows-icon transition-all ease-linear duration-200"><NEXT_ARROW /></div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSlider
