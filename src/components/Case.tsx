import React from 'react';

import config from '../config/index.json';

const Case = () => {
  const { cases } = config;
  const { title, subtitle1, subtitle2, subtitle3, table1, table2 } = cases;
  return (
    <div className={`py-12`} id="case">
      <div
        className={`case-container mx-auto 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full`}
      >
        <div className={`w-full`}>
          <span className={`text-5xl font-bold ml-8`}>Case</span>
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
          <div className={`text-center text-lg`}>
            <span className={`border-2 border-black px-8 py-1`}>
              {subtitle3}
            </span>
          </div>
        </div>
        <div className={`flex justify-center mt-10`}>
          <div className={`case-compare-table`}>
            <table className={`table-auto border-collapse mx-auto`}>
              <thead>
                <tr>
                  <th rowSpan={2}>{table1.title}</th>
                </tr>
              </thead>
              <tbody>
                {table1.rows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.key}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`case-compare-table`}>
            <table className={`table-auto border-collapse mx-auto`}>
              <thead>
                <tr>
                  <th rowSpan={2}>{table2.title}</th>
                </tr>
              </thead>
              <tbody>
                {table2.rows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.key}</td>
                    <td>{row.value}</td>
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
