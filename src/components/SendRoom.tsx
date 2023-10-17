import { useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import config from '../config/index.json';

const SendRoom = () => {
  const { sendRoom } = config;
  const {
    title,
    subtitle,
    leftSmallTitle,
    leftComment,
    leftBottomTip,
    rightGuideImg,
  } = sendRoom;

  const [name, setName] = useState('');
  const [errors, setErrors] = useState({ name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = { name: '' };
    if (!name) {
      validationErrors.name = '名前は必須';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', { name });
      // You can perform additional logic here, such as making an API call
    }
  };

  return (
    <div id="sendroom">
      <hr className={`border-3 h-`} />
      <div
        className={`sendroom-container mx-auto px-5 py-12 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full text-black`}
      >
        <div className={`w-full text-center`}>
          <span
            className={`border-b-2 border-black font-bold text-2xl px-3 py-2`}
          >
            {title}
          </span>
        </div>
        <div className={`text-sm text-center mt-8`}>{subtitle}</div>
        <div className={'phone-guide-panel w-full flex mt-10'}>
          <div className={`w-1/2 px-5`}>
            <div
              className={`phone-guide-left-title w-full py-2 xl:text-xl lg:text-lg text-center text-white`}
            >
              {leftSmallTitle}
            </div>
            <div
              className={`phone-guide-left-comment w-full p-5 mt-2 text-lg text-justify`}
            >
              <div>{leftComment}</div>
              <div className={`font-bold text-md`}>{leftBottomTip}</div>
            </div>
          </div>
          <div className={`w-1/2 px-5 items-center flex`}>
            <img src={rightGuideImg} alt="phoneURL" className={`w-full`} />
          </div>
        </div>
        <div className={`mt-12 py-12`}>
          <Tabs
            className={`react-tabs sendroom-tabs`}
            selectedTabClassName={`active`}
          >
            <TabList className={`react-tabs__tab-list flex`}>
              <Tab
                className={`react-tabs__tab sendroom-tab text-center text-2xl font-bold py-2 w-1/2`}
              >
                メールで送る
              </Tab>
              <Tab
                className={`react-tabs__tab sendroom-tab text-center text-2xl font-bold py-2 w-1/2`}
              >
                LINEで送る
              </Tab>
            </TabList>
            <TabPanel className={`sendroom-tab-panel p-5`}>
              <form onSubmit={handleSubmit} className={`sendroom-form`}>
                <div>
                  <label
                    htmlFor="property1"
                    className={`sendroom-form-label block required`}
                  >
                    物件1
                  </label>
                  <input
                    type="text"
                    id="property1"
                    value={name}
                    className={`sendroom-form-input`}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name}</span>
                  )}
                </div>
                <div className={`mt-5`}>
                  <label
                    htmlFor="property2"
                    className={`sendroom-form-label block`}
                  >
                    物件2
                  </label>
                  <input
                    type="text"
                    id="property2"
                    value={name}
                    className={`sendroom-form-input`}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name}</span>
                  )}
                </div>
                <div className={`mt-5`}>
                  <label
                    htmlFor="property3"
                    className={`sendroom-form-label block`}
                  >
                    物件3
                  </label>
                  <input
                    type="text"
                    id="property3"
                    value={name}
                    className={`sendroom-form-input`}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name}</span>
                  )}
                </div>
                <button type="submit">Submit</button>
              </form>
            </TabPanel>
            <TabPanel className={`sendroom-tab-panel p-5`}>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SendRoom;
