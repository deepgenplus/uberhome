import React from 'react';

import config from '../config/index.json';
import AboutStep from './AboutStep';

const About = () => {
  const { company, about } = config;
  const { name: companyName } = company;
  const { steps } = about;

  return (
    <div id="about" className="w-full text-center py-10">
      <div className={`achieve flex justify-center`}>
        <img
          src="over3000.png"
          className={`mr-10`}
          alt="over3000"
          height="145"
        />
        <img src="02.png" alt="02" height="145" />
        <img src="03.png" alt="03" height="145" />
      </div>
      <div className={`font-bold text-black py-6`}>
        <div className={`text-5xl`}>
          <span className={`text-color-third`}>U</span>ber{' '}
          <span className={`text-color-third`}>H</span>ome
        </div>
        <div
          className={`about-content text-3xl mt-2 mx-auto px-10 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full`}
        >
          <span>
            Uber
            Home（ウーバーホーム）はお客様ご自身で、物件サイトからお気に入りのお部屋を探していただくことにより、仲介手数料を
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
        className={`about-step-div justify-center flex gap-x-3 lg:flex-row lg:gap-y-0 md:gap-y-4 md:flex-col`}
      >
        {steps.map((step, index) => (
          <AboutStep
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
