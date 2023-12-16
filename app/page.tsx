import React from "react";
import HeroSection from "./components/HeroSection";
import AboutMuli from "./components/AboutMuli";
import SurfSummary from "./components/SurfSummary";
import PlacesToStay from "./components/PlacesToStay";
import HomePageCards from "./components/HomePageCard";
import HomePageMainCards from "./components/HomePageMainCards";
import Motion from "./components/Motion";
import Transfer from "./components/Transfer";
import ChatBot from "./components/ChatBot";
import Accordions from "./components/Accordions";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

async function accordionsData() {
  const query = `*[_type == "accordions"] | order(id asc)`;
  const accordionData = await client.fetch(query);
  return accordionData;
}

export default async function Home() {
  const accordionData = await accordionsData();
  return (
    <main className=''>
      <section>
        <HeroSection />
      </section>

      <section>
        <AboutMuli />
      </section>
      <section>
        <Motion>
          <SurfSummary />
        </Motion>
      </section>
      <section>
        <Motion>
          <PlacesToStay />
        </Motion>
      </section>
      <section className='bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-black/90'>
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
        <div>
          <Accordions data={accordionData} />
        </div>
        <ChatBot />
      </section>
    </main>
  );
}
