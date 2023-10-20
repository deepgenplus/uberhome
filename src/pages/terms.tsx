import React from 'react';

import GuideHeader from '../components/GuideHeader';
import GuideFooter from '../components/GuideFooter';
import TermContainer from '../components/TermContainer';

const App = () => {
  return (
    <div className={`bg-background`}>
      <GuideHeader />
      <TermContainer />
      <GuideFooter />
    </div>
  );
};

export default App;
