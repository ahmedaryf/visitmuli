import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import GalleryImages from "../components/Gallery";
export const revalidate = 60;

async function getData() {
  const query = `*[_type == "photoGallery"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Gallery() {
  const data = await getData();
  const bannerImage = data[0]?.bannerImage;
  const images = data[0]?.images;
  return (
    <div>
      <div className='flex flex-col items-center justify-center pb-6'>
        <div className=' relative w-screen h-full md:h-[50vh] overflow-hidden object-cover'>
          {
            <Image
              src={urlForImage(bannerImage).url()}
              width={3000}
              height={200}
              alt='Banner Image'
              className=' aspect-[16/9] md:absolute bottom-0 left-0'
            />
          }
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-b from-orange-100 to-orange-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent w-full text-center py-2'>
            {data[0].title}
          </h1>
        </div>
      </div>
      <div className='px-2 md:px-24 bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-gray-700'>
        <GalleryImages images={images} />
      </div>
    </div>
  );
}
