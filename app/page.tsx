import React from "react";
import HeroSection from "./components/HeroSection";
import AboutMuli from "./components/AboutMuli";

export default function Home() {
  return (
    <main className=''>
      <div>
        <HeroSection />
      </div>
      <AboutMuli />
    </main>
  );
}
