import React, { useState, Fragment } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Menu = () => {
  const [nav, setNav] = useState(false);
  const { navigation, company, mainHero } = config;
  const { name } = company;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="topbar max-w-[1240px] m-auto flex justify-between items-center p-4 shadow-md">
        <Link to="/">
          <h1 className="text-2xl text-white">
            {name}
          </h1>
        </Link>
        <ul className="hidden sm:flex">
          {navigation.map((item) => (
            <li className='px-4' key={item.name}>
              <Link
                spy={true}
                active="active"
                smooth={true}
                duration={1000}
                to={item.href}
                offset={-100}
                className={`text-white cursor-pointer hover:no-underline text-xl`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className={`text-white`} />
          ) : (
            <AiOutlineMenu size={20} className={`text-white`} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={"sm:hidden absolute left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-color-primary text-center ease-in duration-500 pb-10 " + (nav ? "top-0 overflow-auto" : "top-[-100vh] overflow-hidden")}
        >
          <div className={`text-left text-white px-5 py-5 text-2xl`}>{name}</div>
          <ul className={`text-white`}>
            {navigation.map((item) => (
              <li className='hover:text-gray-500 flex items-center p-5 justify-center hover-header-menu-item' key={item.name}>
                <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  to={item.href}
                  offset={-100}
                  onClick={handleNav}
                  className={`cursor-pointer hover:no-underline text-xl font-bold`}
                >
                  {item.mobile_name}
                </Link>
              </li>
            ))}
            <li className={`items-center p-5 justify-center`}>
              <a href='/'>
                <button className={`bg-color-green font-bold text-2xl rounded-full shine shadow-md px-6 py-3`}>{mainHero.sendBtnTitle}</button>
              </a>
            </li>
            <li className={`items-center px-7 justify-center text-black`}>
              <div className={`text-xl px-8 py-4 shadow-md rounded-lg bg-color-skin flex flex-col gap-y-5`}>
                <div className={`text-left flex`}>
                  <div className='w-2/5'>対応時間</div>
                  <div className='w-3/5 font-bold'>10:00〜19:00</div>
                </div>
                <div className={`text-left flex`}>
                  <div className='w-2/5'>営業日</div>
                  <div className='w-3/5 font-bold'>水曜定休</div>
                </div>
              </div>
            </li>
            <li className={`items-center p-3 pt-5`}>
              <a className={`text-xl cursor-pointer border-b-2 border-white`} href='/terms'>​利用規約</a>
            </li>
            <li className={`items-center p-3`}>
              <a className={`text-xl cursor-pointer border-b-2 border-white`} href='/privacypolicy'>​プライバシーポリシー​</a>
            </li>
            <li className={`items-center p-3`}>
              <a className={`text-xl cursor-pointer border-b-2 border-white`} href='/brokerage-fee'>​仲介手数料について</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
