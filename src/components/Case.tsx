import React from 'react';

import config from '../config/index.json';

const Case = () => {
  const { cases } = config;
  const { title, subtitle1, subtitle2, firstCompare, secondCompare } = cases;
  return (
    <div className={`py-12`} id="case">
      <div
        className={`case-container mx-auto 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full`}
      >
        <div className={`w-full`}>
          <span className={`text-5xl font-bold`}>
            <span className={`text-color-third`}>C</span>ase
          </span>
          <span className={`ml-4`}>初期費用の例</span>
        </div>
        <div className="case-title-div mx-auto">
          <div className={`text-center font-bold text-2xl py-10`}>{title}</div>
          <div
            className={`text-center font-bold text-lg mb-4`}
            dangerouslySetInnerHTML={{ __html: subtitle1 }}
          ></div>
          <div
            className={`text-center text-lg mb-8`}
            dangerouslySetInnerHTML={{ __html: subtitle2 }}
          ></div>
        </div>
        <div className={`text-center text-lg pt-8 pb-7`}>
          <span className={`border-2 border-black px-8 py-1`}>
            {firstCompare.title}
          </span>
        </div>
        <div
          className={`flex justify-center lg:gap-x-10 lg:flex-row flex-col gap-y-10`}
        >
          <div className={`case-compare-table md:mx-auto sm:mx-auto`}>
            <table className={`table-auto border-separate w-full mx-5`}>
              <thead>
                <tr>
                  <th colSpan={2} className={`py-3 text-2xl`}>
                    {firstCompare.table1.title}
                  </th>
                </tr>
              </thead>
              <tbody>
                {firstCompare.table1.rows.map((row, index) => (
                  <tr key={index} className={`text-center`}>
                    <td className={`text-xl py-2 w-1/3 font-bold`}>
                      {row.key}
                    </td>
                    <td
                      className={`text-xl py-2 w-2/3`}
                      dangerouslySetInnerHTML={{ __html: row.value }}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              className={`font-bold text-center mx-5 items-center w-full flex mt-3`}
            >
              <div className={`w-1/3 text-xl`}>合計</div>
              <div className={`w-2/3`}>
                <span className={`text-4xl`}>328,000</span>
                <span className={`text-2xl`}>円</span>
              </div>
            </div>
          </div>
          <div className={`case-compare-table md:mx-auto sm:mx-auto`}>
            <table className={`table-auto border-separate w-full mx-5`}>
              <thead>
                <tr>
                  <th colSpan={2} className={`py-3 text-2xl`}>
                    {firstCompare.table2.title}
                  </th>
                </tr>
              </thead>
              <tbody className={`gap-y-10`}>
                {firstCompare.table2.rows.map((row, index) => (
                  <tr key={index} className={`text-center`}>
                    <td className={`text-xl py-2 w-1/3 font-bold`}>
                      {row.key}
                    </td>
                    <td
                      className={`text-xl py-2 w-2/3`}
                      dangerouslySetInnerHTML={{ __html: row.value }}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              className={`font-bold text-center mx-5 items-center w-full flex mt-3`}
            >
              <div className={`w-1/3 text-xl`}>合計</div>
              <div className={`w-2/3 text-color-third`}>
                <span className={`text-4xl`}>240,000</span>
                <span className={`text-2xl`}>円</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-10 ml-6`}>
          {firstCompare.comments.map((comment, index) => (
            <div key={index} className={`py-1`}>
              {comment.content}
            </div>
          ))}
        </div>
        <div className={`text-center text-2xl pt-12 pb-6`}>
          <span
            className={`border-b-2 border-black border-solid font-bold px-3 py-1`}
          >
            {secondCompare.title}
          </span>
        </div>
        <div
          className={`flex justify-center lg:gap-x-10 lg:flex-row gap-y-10 flex-col`}
        >
          <div className={`case-compare-table md:mx-auto sm:mx-auto`}>
            <table className={`table-auto border-separate w-full mx-5`}>
              <thead>
                <tr>
                  <th colSpan={2} className={`py-3 text-2xl`}>
                    {secondCompare.table1.title}
                  </th>
                </tr>
              </thead>
              <tbody>
                {secondCompare.table1.rows.map((row, index) => (
                  <tr key={index} className={`text-center`}>
                    <td className={`text-lg py-2 w-1/3 font-bold`}>
                      {row.key}
                    </td>
                    <td
                      className={`text-xl py-2 w-2/3`}
                      dangerouslySetInnerHTML={{ __html: row.value }}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`case-compare-table md:mx-auto sm:mx-auto`}>
            <table className={`table-auto border-separate w-full mx-5`}>
              <thead>
                <tr>
                  <th colSpan={2} className={`py-3 text-2xl`}>
                    {secondCompare.table2.title}
                  </th>
                </tr>
              </thead>
              <tbody className={`gap-y-10`}>
                {secondCompare.table2.rows.map((row, index) => (
                  <tr key={index} className={`text-center`}>
                    <td className={`text-lg py-2 w-1/3 font-bold`}>
                      {row.key}
                    </td>
                    <td
                      className={`text-xl py-2 w-2/3`}
                      dangerouslySetInnerHTML={{ __html: row.value }}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
