import React from 'react';

import GuideHeader from '../components/GuideHeader';
import GuideFooter from '../components/GuideFooter';
import PrivacyPolicyContainer from '../components/PrivacyPolicyContainer';

const App = () => {
  return (
    <div className={`bg-background`}>
      <GuideHeader />
      <PrivacyPolicyContainer />
      <GuideFooter />
    </div>
  );
};

export default App;
