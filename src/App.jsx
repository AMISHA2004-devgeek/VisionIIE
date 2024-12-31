import React from "react";
import {
  AboutUs,
  Approach,
  Changemakers,
  ContactUs,
  Events,
  HeroSection,
  Insights,
  Media,
  OurMission,
  Partners,
} from "./components";
import { Footer, Navbar } from "./navigation";

function App() {
  return (
    <>
      <div className="fixed top-0 w-full z-50">
      <Navbar />
      </div>
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
      <Footer />
    
    </>
  );
}

export default App;
