import React from "react";
import SectionHeading from "../../common/SectionHeading";
import Slider from "react-slick";
export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
        ],
    };

    return (
        <div className="pt-[162px] max-2xl:pt-32 max-xl:pt-24 max-lg:pt-16 max-md:pt-12 max-sm:pt-10">
            <div className='text-center'>
                <SectionHeading CommonHeading='Simple Steps to' CommonHeadingBold='Switch' />
                <p className='max-w-[610px] mx-auto text-center pt-4 opacity-90 text-[#4B4B4B]'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
            </div>
        <div className="flex justify-center items-center w-full px-4 mt-10 max-md:mt-6 overflow-hidden">
            <div className="w-full max-w-[1320px] ">
                <Slider {...settings}>
                    <div className="max-w-[360px] mx-auto">
                        <div className="relative group img-box">
                            <div className="overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0  bg-lightSkyBlue opacity-100">
                                <p className="xl:text-[32px] absolute text-deepBlue lg:text-2xl text-lg min-w-[600px] -mt-3 -rotate-90 max-sm:-mt-14">
                                    1. Enter Your Location and Preferences
                                </p>
                            </div>
                            <img
                                src="/assets/images/webp/switch-steps-card-img-one.webp"
                                alt="steps-img"
                                className="w-full max-w-[360px]"
                            />
                            <div className="bg-darkGreen p-8 absolute bottom-0 w-full hidden group-hover:block">
                                <h3 className="text-white font-normal text-[32px] max-lg:text-3xl max-md:text-2xl">
                                    1. Switch Easily
                                </h3>
                                <p className="text-white max-w-[286px] pt-4 text-base font-normal mx-auto">
                                    Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth
                                    transition to your new provider.
                                </p>
                            </div>
                        </div>
                     </div>
                    <div className="max-w-[360px] mx-auto">
                        <div className="relative group img-box">
                            <div className="overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0  bg-lightSkyBlue opacity-100">
                                <p className="font-normal xl:text-[32px] absolute text-deepBlue lg:text-2xl text-lg min-w-[600px] -mt-3 max-sm:-mt-14 -rotate-90">
                                    2. Enter Your Location and Preferences
                                </p>
                            </div>
                            <img
                                src="/assets/images/webp/switch-steps-card-img-two.webp"
                                alt="steps-img"
                                className="w-full max-w-[360px]"
                            />
                            <div className="bg-darkGreen p-8 absolute bottom-0 w-full hidden group-hover:block">
                                <h3 className="text-white font-normal text-[32px] max-lg:text-3xl max-md:text-2xl">
                                    2. Switch Easily
                                </h3>
                                <p className="text-white max-w-[286px] pt-4 text-base font-normal mx-auto">
                                    Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth
                                    transition to your new provider.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[360px] mx-auto">
                        <div className="relative group img-box  ">
                            <div className="overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0  bg-lightSkyBlue opacity-100">
                                <p className="font-normal xl:text-[32px] absolute text-deepBlue lg:text-2xl text-lg min-w-[600px] -mt-3 max-sm:-mt-14 -rotate-90">
                                    3. Enter Your Location and Preferences
                                </p>
                            </div>
                            <img
                                src="/assets/images/webp/switch-steps-card-img-three.webp"
                                alt="steps-img"
                                className="w-full max-w-[360px]"
                            />
                            <div className="bg-darkGreen p-8 absolute bottom-0 w-full hidden group-hover:block">
                                <h3 className="text-white font-normal text-[32px] max-lg:text-3xl max-md:text-2xl">
                                    3. Switch Easily
                                </h3>
                                <p className="text-white max-w-[286px] pt-4 text-base font-normal mx-auto">
                                    Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth
                                    transition to your new provider.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[360px] mx-auto">
                        <div className="relative group img-box">
                            <div className="overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0  bg-lightSkyBlue opacity-100">
                                <p className="font-normal xl:text-[32px] absolute text-deepBlue lg:text-2xl text-lg min-w-[600px] -mt-3 max-sm:-mt-14 -rotate-90">
                                    4. Enter Your Location and Preferences
                                </p>
                            </div>
                            <img
                                src="/assets/images/webp/switch-steps-card-img-four.webp"
                                alt="steps-img"
                                className="w-full max-w-[360px]"
                            />
                            <div className="bg-darkGreen p-8 absolute bottom-0 w-full hidden group-hover:block">
                                <h3 className="text-white font-normal text-[32px] max-lg:text-3xl max-md:text-2xl">
                                    4. Switch Easily
                                </h3>
                                <p className="text-white max-w-[286px] pt-4 text-base font-normal mx-auto">
                                    Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth
                                    transition to your new provider.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[360px] mx-auto">
                        <div className="relative group img-box">
                            <div className="overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0  bg-lightSkyBlue opacity-100">
                                <p className="font-normal xl:text-[32px] absolute text-deepBlue lg:text-2xl text-lg min-w-[600px] -mt-3 max-sm:-mt-14 -rotate-90">
                                    1. Enter Your Location and Preferences
                                </p>
                            </div>
                            <img
                                src="/assets/images/webp/switch-steps-card-img-one.webp"
                                alt="steps-img"
                                className="w-full max-w-[360px]"
                            />
                            <div className="bg-darkGreen p-8 absolute bottom-0 w-full hidden group-hover:block">
                                <h3 className="text-white font-normal text-[32px] max-lg:text-3xl max-md:text-2xl">
                                    1. Switch Easily
                                </h3>
                                <p className="text-white max-w-[286px] pt-4 text-base font-normal mx-auto">
                                    Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth
                                    transition to your new provider.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[360px] mx-auto">
                        <div className="relative group img-box">
                            <div className="overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0  bg-lightSkyBlue opacity-100">
                                <p className="font-normal xl:text-[32px] absolute text-deepBlue lg:text-2xl text-lg min-w-[600px] -mt-3 max-sm:-mt-14 -rotate-90">
                                    2. Enter Your Location and Preferences
                                </p>
                            </div>
                            <img
                                src="/assets/images/webp/switch-steps-card-img-two.webp"
                                alt="steps-img"
                                className="w-full max-w-[360px]"
                            />
                            <div className="bg-darkGreen p-8 absolute bottom-0 w-full hidden group-hover:block">
                                <h3 className="text-white font-normal text-[32px] max-lg:text-3xl max-md:text-2xl">
                                    2. Switch Easily
                                </h3>
                                <p className="text-white max-w-[286px] pt-4 text-base font-normal mx-auto">
                                    Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth
                                    transition to your new provider.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[360px] mx-auto">
                        <div className="relative group img-box">
                            <div className="overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0  bg-lightSkyBlue opacity-100">
                                <p className="font-normal xl:text-[32px] absolute text-deepBlue lg:text-2xl text-lg min-w-[600px] -mt-3 max-sm:-mt-14 -rotate-90">
                                    3. Enter Your Location and Preferences
                                </p>
                            </div>
                            <img
                                src="/assets/images/webp/switch-steps-card-img-three.webp"
                                alt="steps-img"
                                className="w-full max-w-[360px]"
                            />
                            <div className="bg-darkGreen p-8 absolute bottom-0 w-full hidden group-hover:block">
                                <h3 className="text-white font-normal text-[32px] max-lg:text-3xl max-md:text-2xl">
                                    3. Switch Easily
                                </h3>
                                <p className="text-white max-w-[286px] pt-4 text-base font-normal mx-auto">
                                    Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth
                                    transition to your new provider.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[360px] mx-auto">
                        <div className="relative group img-box">
                            <div className="overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0  bg-lightSkyBlue opacity-100">
                                <p className="font-normal xl:text-[32px] absolute text-deepBlue lg:text-2xl text-lg min-w-[600px] -mt-3 max-sm:-mt-14 -rotate-90">
                                    4. Enter Your Location and Preferences
                                </p>
                            </div>
                            <img
                                src="/assets/images/webp/switch-steps-card-img-four.webp"
                                alt="steps-img"
                                className="w-full max-w-[360px]"
                            />
                            <div className="bg-darkGreen p-8 absolute bottom-0 w-full hidden group-hover:block">
                                <h3 className="text-white font-normal text-[32px] max-lg:text-3xl max-md:text-2xl">
                                    4. Switch Easily
                                </h3>
                                <p className="text-white max-w-[286px] pt-4 text-base font-normal mx-auto">
                                    Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth
                                    transition to your new provider.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            </div>
            </div>
    );
}
