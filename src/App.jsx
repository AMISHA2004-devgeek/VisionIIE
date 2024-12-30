import React from 'react';
import { AboutUs, Approach, Changemakers, ContactUs, Events, HeroSection, Insights, Media, OurMission, Partners } from './components';


function App() {
  return (
    <div>
      <HeroSection />
      <OurMission />

      {/* Who we are */}
      <AboutUs />
      <Partners />

      {/* What we do */}
      <Approach />
      <Events />
      <Changemakers />

      {/* Insights */}
      <Insights />
      <Media />

      <ContactUs />
    </div>
  );
}

export default App;