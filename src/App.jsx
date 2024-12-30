import React from 'react';
import { AboutUs, BlogAndReports, Changemakers, ContactUs, Events, FeaturedArticles, HeroSection, Media, OurMission, Partners, WhatDrivesUs, WhatWeDo } from './components';


function App() {
  return (
    <div>
      <HeroSection />

      <OurMission />

      {/* Who we are */}
      <AboutUs />
      <WhatDrivesUs />

      <Partners />
      <WhatWeDo />
      <Events />
      <Changemakers />

      {/* Insights */}
      <BlogAndReports />
      <FeaturedArticles />
      <Media />

      <ContactUs />
    </div>
  );
}

export default App;