import React from "react";
import HeroSection from "./components/HeroSection";
import AboutMuli from "./components/AboutMuli";
import SurfSummary from "./components/SurfSummary";
import PlacesToStay from "./components/PlacesToStay";

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
      <div>
        <PlacesToStay />
      </div>
    </main>
  );
}
