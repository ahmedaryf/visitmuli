import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortableText from "react-portable-text";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "homePageMainCards"]`;
  const data = await client.fetch(query, { cache: "no-store" });
  return data;
}

export default async function HomePageMainCards() {
  const data = await getData();
  return (
    <div className=''>
      <h5 className='text-3xl md:text-6xl font-bold bg-gradient-to-b from-blue-100 to-blue-500 dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center mb-4 [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
        Island Essentials
      </h5>
      <div className='flex flex-wrap justify-around gap-4 mt-6 px-4'>
        {data.map((item: any) => (
          <div
            key={item._id}
            className='border-2 border-blue-300/50 dark:border-gray-300 bg-white dark:bg-gray-700 md:w-64 p-4 rounded-lg shadow-xl'>
            <Image
              src={urlForImage(item.image).url()}
              alt={item.title}
              width={500}
              height={500}
            />
            <h5 className='text-center mt-4 mb-2 font-semibold'>
              {item.title}
            </h5>
            <div className=' text-justify line-clamp-4'>
              <PortableText content={item.content} />
            </div>
            <div className='pt-5 font-semibold cursor-pointer'>
              <Link href={`../mainCard/${item.slug.current}`}>
                Read more...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
