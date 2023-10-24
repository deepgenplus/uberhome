import React from 'react';

import config from '../config/index.json';

const Case = () => {
  const { cases } = config;
  const { title, subtitle1, subtitle2, firstTable, secondTable } = cases;
  return (
    <div className={`py-12`} id="case">
      <div
        className={`case-container mx-auto 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full`}
      >
        <div className={`px-5`}>
          <div className={`w-full`}>
            <span className={`text-5xl font-bold`}>
              <span className={`text-color-third`}>C</span>ase
            </span>
            <span className={`ml-4`}>初期費用の例</span>
          </div>
          <div className="md:w-[720px] sm:w-[500px] w-[400px] max-w-[100%] sm:text-center leading-10 text-justify case-title-div mx-auto">
            <div className={`font-bold text-[28px] py-10`} dangerouslySetInnerHTML={{ __html: title }}></div>
            <div className={`sm:text-[24px] text-[20px] bg-white rounded-xl sm:px-5 sm:py-6 p-3`}>
              <div
                className={`font-bold mb-4`}
                dangerouslySetInnerHTML={{ __html: subtitle1 }}
              ></div>
              <div
                className={`sm:text-xl text-lg`}
                dangerouslySetInnerHTML={{ __html: subtitle2 }}
              ></div>
            </div>
          </div>
        </div>
        <div className={`text-center flex justify-center text-lg mt-4 pt-10 pb-7`}>
          <img className={`max-w-[90%] md:block hidden`} src={firstTable.title_img} alt={firstTable.mainTitle} />
          <img className={`max-w-[90%] md:hidden`} src={firstTable.title_img_sm} alt={firstTable.mainTitle} />
        </div>
        <div className={`md:block hidden w-full`}>
          <div
            className={`flex justify-center lg:gap-x-5 lg:flex-row flex-col gap-y-10`}
          >
            <div className={`case-compare-table mx-auto sm:w-[465px] w-[380px] max-w-[90vw]`}>
              <table className={`table-auto border-separate w-full text-center`}>
                <thead>
                  <tr>
                    <th colSpan={2} className={`py-3 text-2xl border-none bg-color-second-grey`}>
                      {firstTable.title1}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {firstTable.rows.map((row, index) => (
                    <tr key={index} className={`text-center`}>
                      <td className={`bg-color-second-grey text-xl py-2 w-1/3 font-bold`}>
                        {row.key}
                      </td>
                      <td
                        className={`text-xl py-2 w-2/3`}
                        dangerouslySetInnerHTML={{ __html: row.value1 }}
                      ></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                className={`font-bold text-center items-center w-full flex mt-3`}
              >
                <div className={`w-1/3 text-xl`}>合計</div>
                <div className={`w-2/3`}>
                  <span className={`text-4xl`}>328,000</span>
                  <span className={`text-2xl`}>円</span>
                </div>
              </div>
            </div>
            <div className={`case-compare-table mx-auto sm:w-[465px] w-[380px] max-w-[90vw]`}>
              <table className={`table-auto border-separate w-full`}>
                <thead>
                  <tr>
                    <th colSpan={2} className={`py-3 text-2xl bg-color-primary`}>
                      {firstTable.title2}
                    </th>
                  </tr>
                </thead>
                <tbody className={`gap-y-10`}>
                  {firstTable.rows.map((row, index) => (
                    <tr key={index} className={`text-center`}>
                      <td className={`bg-color-second-grey text-xl py-2 w-1/3 font-bold`}>
                        {row.key}
                      </td>
                      <td
                        className={`text-xl py-2 w-2/3`}
                        dangerouslySetInnerHTML={{ __html: row.value2 }}
                      ></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                className={`font-bold text-center items-center w-full flex mt-3`}
              >
                <div className={`w-1/3 text-xl`}>合計</div>
                <div className={`w-2/3 text-color-third`}>
                  <span className={`text-4xl`}>240,000</span>
                  <span className={`text-2xl`}>円</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`text-lg mt-10 mx-6 text-justify`}>
            {firstTable.comments.map((comment, index) => (
              <div key={index} className={`py-1`}>
                {comment.content}
              </div>
            ))}
          </div>
        </div>
        <div className={`md:hidden flex flex-col w-full`}>
          <table className={`table-auto border-separate w-full px-2`}>
            <thead>
              <tr>
                <th className={`py-2 border-none bg-color-second-grey`}></th>
                <th
                  className={`text-[16px] py-2 border-none bg-color-second-grey`}
                  dangerouslySetInnerHTML={{ __html: firstTable.title1_sm }}
                >
                </th>
                <th
                  className={`font-normal text-[16px] py-2 border-none bg-color-primary text-white`}
                  dangerouslySetInnerHTML={{ __html: firstTable.title2_sm }}
                >
                </th>
              </tr>
            </thead>
            <tbody className={`gap-y-10`}>
              {firstTable.rows.map((row, index) => (
                <tr key={index} className={`text-center h-[50px]`}>
                  <td className={`text-[14px] bg-color-second-grey border-none py-2 font-bold`}>
                    {row.key}
                  </td>
                  <td
                    className={`text-[16px] py-2 border-b-[1px] border-dotted border-black`}
                    dangerouslySetInnerHTML={{ __html: row.value1 }}
                  ></td>
                  <td
                    className={`text-[16px] py-2 border-b-[1px] border-dotted border-black`}
                    dangerouslySetInnerHTML={{ __html: row.value2 }}
                  ></td>
                </tr>
              ))}
              <tr className={`h-[50px] text-center bg-color-second-grey`}>
                <td className={`text-[14px] bg-color-second-grey border-none-py-2 font-bold`}>合計</td>
                <td className={`text-[14px] bg-color-second-grey border-none-py-2 font-bold`}>
                  <span className={`text-[18px]`}>328,000</span>
                  <span className={`text-[16px]`}> 円</span>
                </td>
                <td className={`text-[14px] text-color-third bg-color-second-grey border-none-py-2 font-bold`}>
                  <span className={`text-[18px]`}>240,000</span>
                  <span className={`text-[16px]`}> 円</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={`text-[16px] mt-5 mx-6 text-justify`}>
            {firstTable.comments.map((comment, index) => (
              <div key={index} className={`py-1`}>
                {comment.content}
              </div>
            ))}
          </div>  
        </div>
        <div className={`text-center justify-center flex text-2xl mt-4 md:pt-12 pt-6 pb-6`}>
          <img className={`max-w-[90%]`} src={secondTable.title_img} alt={secondTable.mainTitle} />
        </div>
        <div className={`md:block hidden w-full`}>
          <div
            className={`flex justify-center lg:gap-x-5 lg:flex-row gap-y-10 flex-col`}
          >
            <div className={`case-compare-table mx-auto sm:w-[465px] w-[380px] max-w-[90vw]`}>
              <table className={`table-auto border-separate w-full`}>
                <thead>
                  <tr>
                    <th colSpan={2} className={`py-3 text-2xl border-none bg-color-second-grey`}>
                      {secondTable.title1}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {secondTable.rows.map((row, index) => (
                    <tr key={index} className={`text-center`}>
                      <td className={`bg-color-second-grey text-lg py-2 w-1/3 font-bold`}>
                        {row.key}
                      </td>
                      <td
                        className={`text-lg py-2 w-2/3`}
                        dangerouslySetInnerHTML={{ __html: row.value1 }}
                      ></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={`case-compare-table mx-auto sm:w-[465px] w-[380px] max-w-[90vw]`}>
              <table className={`table-auto border-separate w-full`}>
                <thead>
                  <tr>
                    <th colSpan={2} className={`py-3 text-2xl`}>
                      {secondTable.title2}
                    </th>
                  </tr>
                </thead>
                <tbody className={`gap-y-10`}>
                  {secondTable.rows.map((row, index) => (
                    <tr key={index} className={`text-center`}>
                      <td className={`bg-color-second-grey text-lg py-2 w-1/3 font-bold`}>
                        {row.key}
                      </td>
                      <td
                        className={`md:text-xl text-lg py-2 w-2/3`}
                        dangerouslySetInnerHTML={{ __html: row.value2 }}
                      ></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className={`md:hidden flex flex-col w-full`}>
          <table className={`table-auto border-separate w-full px-2`}>
            <thead>
              <tr>
                <th className={`py-2 border-none bg-color-second-grey min-w-[70px]`}></th>
                <th
                  className={`sm:text-[16px] text-[14px] py-2 border-none bg-color-second-grey`}
                  dangerouslySetInnerHTML={{ __html: secondTable.title1_sm }}
                >
                </th>
                <th
                  className={`font-normal sm:text-[16px] text-[14px] py-2 border-none bg-color-primary text-white min-w-[80px]`}
                  dangerouslySetInnerHTML={{ __html: secondTable.title2_sm }}
                >
                </th>
              </tr>
            </thead>
            <tbody className={`gap-y-10`}>
              {secondTable.rows.map((row, index) => (
                <tr key={index} className={`text-center h-[50px]`}>
                  <td className={`text-[12px] bg-color-second-grey border-none py-2 font-bold`} dangerouslySetInnerHTML={{ __html: row.key_sm }}>
                  </td>
                  <td
                    className={`text-[12px] py-2 border-b-[1px] border-dotted border-black leading-[18px]`}
                    dangerouslySetInnerHTML={{ __html: row.value1 }}
                  ></td>
                  <td
                    className={`text-[14px] py-2 border-b-[1px] border-dotted border-black`}
                    dangerouslySetInnerHTML={{ __html: row.value2_sm }}
                  ></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Case;
