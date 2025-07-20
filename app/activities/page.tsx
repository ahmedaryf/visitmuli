import React from "react";

import ActivityCards from "../components/ActivityCards";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "activity"]{
  image,
  title,
  slug,
  _id
  }`;
  const data = await client.fetch(query);
  return data;
}
async function getBannerImage() {
  const query = `*[_type == "bannerImages" && name == "Activity Page"]{
  bannerImage,
  _id
  }`;
  const data = await client.fetch(query);
  return data;
}

const opts = {
  height: "100%",
  hidth: "100%",
  playerVars: {
    autoplay: 0,
  },
};

export default async function Activities() {
  const data = await getData();
  const bannerImageData = await getBannerImage();

  return (
    <div className='pb-12 md:px-6 md:pb-24 bg-gradient-to-b dark:from-black/90 dark:to-gray-700 flex flex-col items-center'>
      <div className='w-full md:h-[70vh] overflow-hidden relative'>
        {bannerImageData.map((image: any) => (
          <div key={image._id}>
            {image.bannerImage && (
              <Image
                src={urlForImage(image.bannerImage).url()}
                alt='Image'
                width={3000}
                height={200}
                className=' aspect-[16/9] object-cover'
              />
            )}
          </div>
        ))}
        <div className='w-full flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 bg-white/40 dark:bg-black/60 py-2'>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-b from-orange-100 to-orange-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent py-2'>
            Things to Do
          </h1>
          <h5 className='text-orange-600 dark:text-gray-300 font-semibold text-xs md:text-xl'>
            Unleash the Adventures on Your Activity List
          </h5>
        </div>
      </div>
      <div className='w-[90vw]pb-24 px-4 md:px-0 mt-16'>
        <div className=''>
          <ActivityCards data={data} />
        </div>

        <div className='md:w-[60vw]'>
          {/* <div className={"youtubePlayer"}>
          <YouTube videoId={"4Ff2ZrhVkp0"} opts={opts} />
        </div> */}
        </div>
      </div>
    </div>
  );
}
