import React from "react";
import Header from "../common/Header";
import CustomButton from "../common/CustomButton";
const HeroSection = () => {
  return (
    <>
      <div
        className="hero-section bg-cover bg-center relative bg-hero-img bg-[url('/public/assets/images/webp/hero-section-bg-img.webp')]"
      >
        <div className="container">
          <Header />

          <div className="flex items-center max-lg:flex-col gap-8 max-lg:gap-6 max-xl:py-14 max-md:py-7">
            <div className="w-6/12 max-lg:w-full">
              <div>
                <h1 className="leading-[70px] font-helvetica max-w-[612px] max-lg:max-w-none max-lg:text-center  font-normal text-[64px] text-white max-xl:text-5xl max-lg:text-4xl max-md:text-3xl">
                  Easily Compare Energy, Gas, and Internet Plans
                </h1>
                <p className="leading-[24px] font-helvetica max-lg:text-center text-base font-normal max-w-[506px] pt-4 text-white max-md:max-w-none max-lg:mx-auto">
                  Find and switch to the best energy, gas, and internet plans
                  with ease. Our platform simplifies your search, letting you
                  compare providers and make informed decisions, all in one
                  place.
                </p>
                <form className="max-lg:mx-auto mt-10 flex items-center justify-between max-w-[476px] bg-white rounded-e-full border-darkBlack border border-solid rounded-b-full">
                  <input
                    type="text"
                    placeholder="Start typing your address"
                    required
                    className="placeholder:text-deepBlue placeholder:text-base placeholder:font-normal placeholder:max-sm:text-sm max-sm:text-sm outline-none px-6 max-sm:px-3  text-deepBlue bg-transparent"
                  />
                  <CustomButton btnTittle="compare" />
                </form>
              </div>
            </div>
            <div className="w-6/12 max-lg:w-full ">
              <img
                src='/assets/images/webp/hero-section-img.webp'
                alt="working-girl"
                className=" max-lg:hidden pointer-events-none w-full max-w-[558px] max-lg:mx-auto relative z-0 translate-y-[120px] max-xl:translate-y-0 max-xl:pb-7"
              />
              <img src="/assets/images/webp/hero-section-sm-img.webp" alt="working-girl" className="mx-auto lg:hidden pointer-events-none w-full max-w-[558px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
