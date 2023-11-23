import React from "react";
import HeroSection from "./components/HeroSection";
import AboutMuli from "./components/AboutMuli";
import SurfSummary from "./components/SurfSummary";
import PlacesToStay from "./components/PlacesToStay";
import HomePage from "./components/HomePageCard";
import HomePageCards from "./components/HomePageCard";

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
      <div className='md:grid md:grid-cols-4 md:max-w-[95vw] lg:max-w-[90vw] mx-auto pt-24'>
        <div className='col-span-3'></div>
        <div className='border-t-2 border-l-2'>
          <HomePageCards />
        </div>
      </div>
    </main>
  );
}
