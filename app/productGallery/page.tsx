import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import BackButton from "../components/BackButton";

import ProductsGalleryCard from "../components/ProductsGalleryCard";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "productGallery"]`;
  const data = await client.fetch(query);
  return data;
}
async function getProductData() {
  const query = `*[_type == "products"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function ProductGallery() {
  const data = await getData();
  const productData = await getProductData();

  return (
    <div className='bg-[#00314E] dark:bg-black'>
      <div className='w-full md:max-h-[65vh] overflow-hidden relative pt-20'>
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
            <div className='flex flex-col justify-center items-center absolute top-2/3 md:top-1/2 left-1/2 -translate-x-1/2  bg-white/40 dark:bg-black/60 py-2 w-full'>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-orange-100 to-orange-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent py-2'>
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
        {/* <ProductGalleryCard imageData={data} /> */}
      </div>
      <div className='mt-4 md:mt-6'>
        <ProductsGalleryCard product={productData} />
      </div>
    </div>
  );
}
