import React from "react";

export default function Accommodations() {
  return (
    <div className=' pt-24 pb-24 md:px-6 bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-gray-700 w-screen'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl md:text-8xl font-bold bg-gradient-to-b from-blue-100 to-blue-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
          Accommodations
        </h1>
        <h5 className='text-blue-700 dark:text-gray-300 font-semibold text-xs md:text-xl'>
          Where Comfort Meets Destination: Your Home Away from Home!
        </h5>
      </div>
    </div>
  );
}
