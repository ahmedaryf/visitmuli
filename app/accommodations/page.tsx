import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import PortableText from "react-portable-text";

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
      <div className=' w-16'>
        <Link href={"/"}>
          <div className='ps-8 pt-6 mb-4 md:mb-0'>
            <FaArrowLeft size={28} color={"gray"} />
          </div>
        </Link>
      </div>
      <div className='px-4 md:w-[80vw] mx-auto '>
        <div className='bg-gradient-to-b from-white to-gray-100/50 dark:from-black dark:to-gray-600 p-6 mt-6'>
          {data.map((item: any) => (
            <div
              key={item._id}
              className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Image
                src={urlForImage(item.mainImage).url()}
                alt='Main Image'
                width={600}
                height={600}
                className='rounded-md'
              />
              <div className=' text-justify prose dark:prose-invert custom-prose'>
                <PortableText content={item.description} />
              </div>
            </div>
          ))}
        </div>
        <div className='mt-12 flex flex-wrap gap-6'>
          {data.map((item: any) =>
            item.guesthouses.map((guesthouse: any) => (
              <div
                key={item._id}
                className='bg-white dark:bg-black/40 p-4 rounded-lg  md:w-72 border-2 border-blue-200/50 dark:border-gray-400/50 shadow-xl'>
                <Image
                  src={urlForImage(guesthouse.guesthouseImage).url()}
                  alt={guesthouse.guesthouseName}
                  width={400}
                  height={300}
                  className='rounded-md'
                />

                <h5 className='text-xl md:text-2xl font-bold bg-gradient-to-b from-gray-100 to-black dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center pt-6 mb-2 [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
                  {guesthouse.guesthouseName}
                </h5>
                <div className='prose dark:prose-invert line-clamp-4'>
                  {/* <PortableText content={guesthouse.guesthotseDescription} /> */}
                </div>
                <div className='pt-5 font-semibold cursor-pointer'>
                  <Link href={`../guesthouse/${guesthouse.slug.current}`}>
                    Read more...
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
