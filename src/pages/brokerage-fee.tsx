import React from 'react';

import GuideHeader from '../components/GuideHeader';
import GuideFooter from '../components/GuideFooter';
import BrokerageFeeContainer from '../components/BrokerageFeeContainer';

const App = () => {
  return (
    <div className={`bg-background`}>
      <GuideHeader />
      <BrokerageFeeContainer />
      <GuideFooter />
    </div>
  );
};

export default App;
