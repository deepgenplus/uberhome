import React from 'react';

import config from '../config/index.json';
import AboutStep from './AboutStep';

const About = () => {
  const { about } = config;
  const { steps } = about;

  return (
    <div id="about" className="w-full text-center bg-color-grey py-10">
      <div className={`achieve justify-center md:flex hidden`}>
          <img
            className={`h-[145px]`}
            src="over4000.png"
            alt="over4000"
            height="145"
          />
          <img src="02.png" alt="02" height="145" />
          <img src="03.png" alt="03" height="145" />
      </div>
      <div className={`md:hidden flex justify-center`}>
        <img src="over4000.png" alt="over4000" height="145" />
      </div>
      <div className={`md:hidden flex justify-center mt-3`}>
          <img className={`max-w-[50%]`} src="02.png" alt="02" height="145" />
          <img className={`max-w-[50%]`} src="03.png" alt="03" height="145" />
      </div>
      <div className={`font-bold text-black py-5`}>
        <div className={`md:text-[40px] sm:text-[34px] text-[28px]`}>LINEで賃貸</div>
        <div
          className={`about-content md:text-[30px] sm:text-[24px] text-[20px] mt-2 mx-auto px-10 2xl:w-3/5 xl:w-2/3 lg:w-3/4 md:w-4/5 w-full text-justify md:leading-[50px] sm:leading-[40px] leading-[30px]`}
        >
          <span>
            LINEで賃貸はお客様ご自身で、物件サイトからお気に入りのお部屋を探していただくことにより、仲介手数料を
          </span>
          <span className={`text-color-third`}>0円</span>
          <span> or </span>
          <span className={`text-color-third`}>2,5万円</span>
          <span>
            （税込）でご紹介することができる新しいセルフ型の賃貸サービスです。
          </span>
        </div>
      </div>
      <div
        className={`about-step-div justify-center flex gap-x-3 lg:flex-row lg:gap-y-0 gap-y-4 flex-col`}
      >
        {steps.map((step, index) => (
          <AboutStep
            index={index+1}
            title={step.title}
            content={step.content}
            img={step.img}
            key={index}
          ></AboutStep>
        ))}
      </div>
    </div>
  );
};
export default About;
