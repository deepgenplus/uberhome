import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <>
      <div className={`main-hero mt-16`}>
        <img src="hero.jpg" className="hero-background" alt="hero" />
        <div className={`cta-panel absolute`}>
          <div className={`cta-main-panel pt-7 -pb-5`}>
            <img className="tag-img" src="01.png" alt="01" />
            <div className={`font-semibold text-2xl text-center`}>
              {mainHero.title}
            </div>
            <hr className="my-5 mx-8"></hr>
            <div className={`font-bold text-4xl text-center mx-10`}>
              <div>他サイトで見つけた気になるお部屋</div>
              <div className="-mt-6">
                仲介手数料{' '}
                <span className={`text-color-third`}>
                  最大
                  <span className={`text-6xl font-bold relative`}>0</span>円
                </span>{' '}
                でお届け。
              </div>
            </div>
          </div>
          <button
            className={`btn-send-room text-center text-white mt-4 py-2 shadow-lg block`}
          >
            {mainHero.sendBtnTitle}
          </button>
        </div>
      </div>
    </>
  );
};

export default MainHero;
