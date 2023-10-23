import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <div className='w-full'>
      <div className={`main-hero w-full mt-[60px]`}>
        <img className={`md:block hidden w-full`} src={`hero_bg.png`} />
        <img className={`md:hidden block w-full`} src={`hero_bg_sp.png`} />
      </div>
      <div className={`w-full bg-color-primary flex items-center justify-center xl:h-[150px] lg:h-[130px] md:h-[100px] sm:h-[120px] h-[80px]`}>
        <button
          className={`bg-color-green rounded-full lg:text-4xl sm:text-2xl text-lg font-bold text-center text-white lg:px-12 px-6 py-2 shadow-lg shine block`}
        >
          {mainHero.sendBtnTitle}
        </button>
      </div>
    </div>
  );
};

export default MainHero;
