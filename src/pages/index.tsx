import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Case from '../components/Case';
import FAQ from '../components/FAQ';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import Service from '../components/Service';
import Why from '../components/Why';

const App = () => {
  return (
    <div className={`bg-background grid overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className={`relative z-10 bg-background lg:w-full`}>
          <Header />
          <MainHero />
        </div>
      </div>
      <LazyShow>
        <About />
      </LazyShow>
      <LazyShow>
        <Case />
      </LazyShow>
      <LazyShow>
        <Why />
      </LazyShow>
      <LazyShow>
        <Service />
      </LazyShow>
      <LazyShow>
        <FAQ />
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
