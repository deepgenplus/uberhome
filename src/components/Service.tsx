/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import config from '../config/index.json';
import ServiceItem from './ServiceItem';

const Service = () => {
  const { services } = config;
  const { records: serviceItems } = services;
  const { texts: serviceTexts } = services;

  return (
    <div id="service" className={``}>
      <div className={`container service-top  mx-auto`}>
        <div className="">
          <h2
            className="font_2 wixui-rich-text__text"
            style={{
              lineHeight: 'normal',
              fontSize: '20px',
              marginTop: '63px',
            }}
          >
            <span className="wixui-rich-text__text">
              <span
                style={{ fontWeight: 'bold' }}
                className="wixui-rich-text__text"
              >
                <span
                  style={{ color: '#c43735', fontSize: '46px' }}
                  className="wixui-rich-text__text"
                >
                  <span className="wixui-rich-text__text">
                    <span
                      style={{ letterSpacing: '0.08em' }}
                      className="wixui-rich-text__text"
                    >
                      S
                    </span>
                  </span>
                </span>
                <span
                  style={{ color: '#324158' }}
                  className="wixui-rich-text__text"
                >
                  <span
                    style={{ fontSize: '46px' }}
                    className="wixui-rich-text__text"
                  >
                    <span className="wixui-rich-text__text">
                      <span
                        style={{ letterSpacing: '0.08em' }}
                        className="wixui-rich-text__text"
                      >
                        ervice
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  style={{ color: '#38404B' }}
                  className="wixui-rich-text__text"
                >
                  <span className="wixui-rich-text__text">
                    <span
                      style={{ fontSize: '46px', letterSpacing: '0.08em' }}
                      className="wixui-rich-text__text"
                    >
                      &nbsp;
                    </span>
                    <span
                      style={{ fontSize: '14px', letterSpacing: '0.056em' }}
                      className="wixui-rich-text__text"
                    >
                      サービス概要
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </h2>
        </div>
        <div className={`bg-white py-10 sm:py-15`}>
          {serviceItems.map((item, idx) => (
            <ServiceItem
              title={item.title}
              description={item.description}
              refs={item.ref}
              imgPath={item.imagePath}
              key={idx}
            ></ServiceItem>
          ))}
        </div>
      </div>
      <div className={`bg-gray-100 p-5`}>
        <div
          className={` mx-auto`}
          style={{ maxWidth: '980px', color: '#38404b' }}
        >
          <h2
            className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700 mb-3"
            style={{ fontSize: '25px' }}
          >
            {serviceTexts.text1}
          </h2>
          <div
            className={`mx-auto mb-10`}
            // style={{ width: '284px', borderTop: '4px solid #000' }}
          ></div>
          <div className={`grid grid-cols-1 gap-y-16 lg:grid-cols-2 px-10`}>
            <div className="flex flex-col gap-y-4">
              <img src="service5.jpg" width={452} height={152}></img>
            </div>
            <div
              className="flex flex-col gap-y-4 px-5"
              style={{ fontSize: '19px', lineHeight: '1.5em' }}
            >
              <div>{serviceTexts.text2}</div>
              <div>{serviceTexts.text3}</div>
            </div>
          </div>
          <div className={`mx-auto p-5`} style={{ fontSize: '18px' }}>
            <div className={`bg-white p-5 my-5`} style={{ color: '#38404B' }}>
              <p>{serviceTexts.text4}</p>
              <p>{serviceTexts.text5}</p>
            </div>
            <div className={`bg-white p-5 my-5 font-bold`}>
              <p>{serviceTexts.text6}</p>
              <p>{serviceTexts.text7}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-1 gap-y-16 lg:grid-cols-2 bg-white`}>
        <div className={`flex flex-col gap-y-4`}>
          <img
            src="1.jpg"
            width={441}
            height={793}
            style={{
              width: '856px',
              height: '793px',
              objectFit: 'cover',
              objectPosition: '50% 50%',
              visibility: 'visible',
            }}
          ></img>
        </div>
        <div
          className={`flex flex-col gap-y-4 mx-auto w-[519px] text-[18px] max-w-[100%]`}
        >
          <div
            id="comp-l9fux78n"
            className={`tz5f0K comp-l9fux78n wixui-rich-text max-w-[100%]`}
          >
            <h3
              className="font_5 wixui-rich-text__text"
              style={{ fontSize: '46px' }}
            >
              <span
                style={{ fontSize: '46px' }}
                className="wixui-rich-text__text"
              >
                <span
                  style={{ fontWeight: 'bold' }}
                  className="wixui-rich-text__text font-bold"
                >
                  <span
                    style={{ color: '#C43735' }}
                    className="wixui-rich-text__text"
                  >
                    <span className="wixui-rich-text__text">T</span>
                  </span>
                  <span
                    style={{ color: '#38404B' }}
                    className="wixui-rich-text__text"
                  >
                    <span className="wixui-rich-text__text">o customers </span>
                  </span>
                </span>
              </span>
              <span
                style={{ fontSize: '14px' }}
                className="wixui-rich-text__text"
              >
                <span
                  style={{ fontWeight: 'bold' }}
                  className="wixui-rich-text__text"
                >
                  <span
                    style={{ color: '#38404B' }}
                    className="wixui-rich-text__text"
                  >
                    <span className="wixui-rich-text__text">お客様へ</span>
                  </span>
                </span>
              </span>
            </h3>
          </div>
          <div
            id="comp-l9fux794"
            className="service-text"
            data-testid="richTextElement"
          >
            <p className="service-text__text" style={{ marginBottom: '30px' }}>
              <span className="service-text__text font-bold">
                <span
                  style={{ fontSize: '18px' }}
                  className="service-text__text"
                >
                  LINEで賃貸はお客様の引越しに伴う初期費用を最小限に抑えるため
                </span>
              </span>
              <span className="service-text__text font-bold">
                <span className="service-text__text">
                  ご自身でお部屋を探していただくセルフ型の賃貸サービスです。
                </span>
              </span>
            </p>

            <p className="service-text__text">
              <span className="service-text__text">
                お客様の中には、「まずは不動産会社に行って相談したい」
              </span>
            </p>

            <p className="service-text__text mb-5">
              <span className="service-text__text">
                そう思われるお客様にはご満足いただけないかもしれません。
              </span>
            </p>

            <p className="service-text__text" style={{ marginBottom: '30px' }}>
              <span className="service-text__text">
                LINEで賃貸では、今の時代に合った新しい形で賃貸サービスを
              </span>
              <span className="service-text__text">
                <span className="service-text__text">提供して</span>
              </span>
              <span className="service-text__text">
                いきたいと思っております。
              </span>
            </p>

            <p className="service-text__text" style={{ marginBottom: '30px' }}>
              <span className="service-text__text">
                店舗コストの削減や、来店・接客を不要とした業務のシステム化を
              </span>
              <span className="service-text__text">
                <span className="service-text__text">図る</span>
              </span>
              <span className="service-text__text">
                ことで最大限の賃貸サービスをお客様に提供します。
              </span>
            </p>
            <p className="service-text__text">
              <span className="service-text__text">
                お問い合わせいただいた全てのお客様により良い新生活がス
              </span>
              <span className="service-text__text">
                タートできるよう精一杯サポートさせていただきます。
              </span>
            </p>

            <p className="service-text-p">
              <span className="service-text__text">
                まずはご契約いただくまで料金は一切発生しませんので、お気軽に
              </span>
              <span className="service-text__text">
                <span className="service-text__text">
                  <span className="service-text__text">
                    <span>LINEで賃貸をお試しください。</span>
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
