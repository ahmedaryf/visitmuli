import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import ProductGalleryCard from "../components/ProductGalleryCard";
import BackButton from "../components/BackButton";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "productGallery"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function ProductGallery() {
  const data = await getData();

  return (
    <div className='bg-[#00314E] dark:bg-black'>
      <div className='w-full md:h-[55vh] overflow-hidden relative'>
        {data.map((image: any) => (
          <>
            <Image
              key={image._id}
              src={urlForImage(image.bannerImage).url()}
              alt='Image'
              width={3000}
              height={200}
              layout='responsive'
              className=' object-contain'
            />
            <div className='flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2  bg-white/70 dark:bg-black/60 py-2 w-full'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-orange-100 to-orange-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent py-2'>
                {image.bannerImageTitle}
              </h1>
            </div>
          </>
        ))}
      </div>
      <div>
        <div className='ps-8 pt-6 mb-4 md:mb-0 w-9 text-xl md:text-2xl'>
          <BackButton />
        </div>
        <ProductGalleryCard imageData={data} />
      </div>
    </div>
  );
}
