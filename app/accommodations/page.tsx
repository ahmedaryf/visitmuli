import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "accommodationDetails"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Accommodations() {
  const data = await getData();
  return (
    <div className=' pb-24 md:px-6 bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-gray-700 w-screen'>
      <div className='w-full md:h-[60vh] overflow-hidden relative'>
        {data.map((image: any) => (
          <Image
            key={image._id}
            src={urlForImage(image.bannerImage).url()}
            alt='Image'
            width={3000}
            height={200}
            layout='responsive'
            className=' aspect-[16/9]'
          />
        ))}
        <div className='flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 bg-white/40 dark:bg-black/60 py-2 w-full'>
          <h1 className='text-5xl md:text-8xl font-bold bg-gradient-to-b from-orange-100 to-orange-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
            Cozy Retreats
          </h1>
          <h5 className='text-orange-600 dark:text-gray-300 font-semibold text-xs md:text-xl'>
            Where Comfort Meets Destination: Your Home Away from Home!
          </h5>
        </div>
      </div>
      <div>
        <Link href={"/"}>
          <div className='ps-8 pt-6 mb-4 md:mb-0'>
            <FaArrowLeft size={28} color={"gray"} />
          </div>
        </Link>
      </div>
    </div>
  );
}
