import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ActivityCards({ data }: any) {
  return (
    <div className=''>
      <div className='flex flex-wrap gap-4 justify-center'>
        {data.map((item: any) => (
          <div
            key={item._id}
            className=' flex flex-col justify-between bg-white dark:bg-gray-700 rounded-md shadow-md p-2 border border-blue-300 dark:border-gray-200'>
            <div className='p-4'>
              <Image
                src={urlForImage(item.image).url()}
                width={300}
                height={200}
                alt='image'
                className='mx-auto rounded-md object-cover aspect-[4/3]'
              />
            </div>
            <h2 className='text-center text-xl md:text-2xl font-bold bg-gradient-to-b from-gray-700/80 to-gray-500 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-4 '>
              {item.title}
            </h2>
            <div className='font-semibold cursor-pointer w-[90%] rounded-full border border-blue-300 dark:border-gray-200 mt-10 self-center mb-8'>
              <Link href={`../activity/${item.slug.current}`}>
                <p className='text-center text-blue-400 dark:text-gray-200 text-xs md:text-sm'>
                  Details
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
