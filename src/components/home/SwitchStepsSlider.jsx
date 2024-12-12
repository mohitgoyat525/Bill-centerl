import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <div className="flex justify-center items-center w-full px-4 xl:hidden  max-xl:mt-10 max-md:mt-6 overflow-hidden">
        
            <div className="w-full max-w-[1200px]">
                <Slider {...settings}>
                    <div className="max-w-[360px] mx-auto">
                        <div className="relative group img-box  ">
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
                        <div className="relative group img-box  ">
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
                        <div className="relative group img-box  ">
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
                        <div className="relative group img-box  ">
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
                        <div className="relative group img-box  ">
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
                        <div className="relative group img-box  ">
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
    );
}
