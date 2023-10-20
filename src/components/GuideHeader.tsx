import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import config from '../config/index.json';

const Menu = () => {
  const [nav, setNav] = useState(false);
  const { guideNavigation, company, mainHero } = config;
  const { name } = company;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="fixed left-0 top-0 w-full ease-in duration-300 z-50"
    >
      <div className="guide-topbar bg-white text-black m-auto flex justify-between items-center p-5">
        <a href="/">
          <h1 className="text-xl">
            {name}
          </h1>
        </a>
        <ul className="hidden md:flex">
          {guideNavigation.map((item) => (
            <li className='px-5 flex items-center' key={item.name}>
              <a className={`text-sm`} href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block md:hidden z-10">
          {nav ? (
            <AiOutlineClose size={15} className={`text-black`} />
          ) : (
            <AiOutlineMenu size={15} className={`text-black`} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={"md:hidden absolute left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-white text-center ease-in duration-500 pb-10 " + (nav ? "top-0 overflow-auto" : "top-[-100vh] overflow-hidden")}
        >
          <div className={`text-left text-black px-5 py-5 text-2xl`}><a href='/'>{name}</a></div>
          <ul className={`text-black`}>
            {guideNavigation.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className={`cursor-pointer text-xl`}
              >
                <li className='flex items-center p-5 justify-center' onClick={handleNav}>
                    {item.mobile_name}
                </li>
              </a>
            ))}
            <li className={`items-center p-5 justify-center`}>
              <a href='/'>
                <button className={`bg-color-green font-bold text-xl rounded-full shine shadow-md text-white px-5 py-2`}>{mainHero.sendBtnTitle}</button>
              </a>
            </li>
            <li className={`items-center px-7 justify-center text-black md:`} onClick={handleNav}>
              <div className={`md:text-xl sm:text-lg px-8 py-4 border-2 border-black rounded-lg flex flex-col gap-y-5 w-full`}>
                <div className={`flex sm:gap-x-12 gap-x-3`}>
                  <div className='text-right w-2/5'>対応時間</div>
                  <div className='text-left w-3/5 font-bold'>10:00〜19:00</div>
                </div>
                <div className={`flex sm:gap-x-12 gap-x-3`}>
                  <div className='text-right w-2/5'>営業日</div>
                  <div className='text-left w-3/5 font-bold'>水曜定休</div>
                </div>
              </div>
            </li>
            <li className={`items-center p-3 pt-5`}>
              <a className={`text-xl cursor-pointer border-b-2 border-black`} href='/terms'>​利用規約</a>
            </li>
            <li className={`items-center p-3`}>
              <a className={`text-xl cursor-pointer border-b-2 border-black`} href='/privacypolicy'>​プライバシーポリシー​</a>
            </li>
            <li className={`items-center p-3`}>
              <a className={`text-xl cursor-pointer border-b-2 border-black`} href='/brokerage-fee'>​仲介手数料について</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
