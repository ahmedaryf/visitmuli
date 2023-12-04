import React from "react";
import HeroSection from "./components/HeroSection";
import AboutMuli from "./components/AboutMuli";
import SurfSummary from "./components/SurfSummary";
import PlacesToStay from "./components/PlacesToStay";
import HomePageCards from "./components/HomePageCard";
import HomePageMainCards from "./components/HomePageMainCards";
import Motion from "./components/Motion";
import Transfer from "./components/Transfer";

export const revalidate = 60;

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
        <Motion>
          <SurfSummary />
        </Motion>
      </div>
      <div>
        <Motion>
          <PlacesToStay />
        </Motion>
      </div>
      <div className='bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-black/90'>
        <div className='md:grid md:grid-cols-4 md:max-w-[95vw] lg:max-w-[90vw] mx-auto pt-24 '>
          <div className='col-span-3'>
            <Motion>
              <HomePageMainCards />
            </Motion>
          </div>
          <div className='md:border-t-2 md:border-l-2 md:border-blue-300/50 dark:border-gray-400 rounded-lg'>
            <HomePageCards />
          </div>
        </div>
        <div className='bg-blue-200/30 dark:bg-gray-500'>
          <Motion>
            <Transfer />
          </Motion>
        </div>
      </div>
    </main>
  );
}
