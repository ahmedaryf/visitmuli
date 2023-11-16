import React from "react";
import HeroSection from "./components/HeroSection";
import AboutMuli from "./components/AboutMuli";
import SurfSummary from "./components/SurfSummary";

export default function Home() {
  return (
    <main className=''>
      <div>
        <HeroSection />
      </div>
      <div>
        <AboutMuli />
      </div>
      <div>
        <SurfSummary />
      </div>
    </main>
  );
}
