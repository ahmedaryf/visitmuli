import Image from "next/image";
import React from "react";
import SurfCarousal from "../components/SurfCarousal";
import { client } from "@/sanity/lib/client";
import PortableText from "react-portable-text";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "surfDetailPage"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Surf() {
  const data = await getData();

  return (
    <div className='pb-24 md:px-6 bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-gray-700 w-screen'>
      <Link href={"/"}>
        <div className='ps-8 pt-20 mb-4 md:mb-0'>
          <FaArrowLeft size={28} color={"gray"} />
        </div>
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8 md:px-4 mt-16  md:w-[90vw] mx-auto'>
        <div className=' col-span-2'>
          <div>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-blue-100 to-blue-600 dark:from-white dark:to-gray-100 bg-clip-text text-transparent text-center mb-4 [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
              Muli Surf Guide
            </h1>
          </div>
          {data.map((item: any) => {
            return (
              <div key={item._id} className='px-4'>
                <div className=''>
                  <Image
                    src={urlForImage(item.image).url()}
                    alt={item.title}
                    width={1000}
                    height={800}
                    className='mx-auto aspect-[16/9] pb-4 rounded-md'
                  />
                </div>

                <div
                  className='prose dark:prose-invert custom-prose text-justify pt-6 md:pt-0'
                  style={{ marginTop: -20 }}>
                  <PortableText content={item.content} />
                </div>
              </div>
            );
          })}
        </div>
        <div className='px-4 md:px-0 bg-gradient-to-b md:border-l-2 border-t-2 border-blue-200/50 dark:border-gray-300/40 rounded-md'>
          <h5 className='text-xl md:text-2xl lg:text-2xl font-bold bg-gradient-to-b from-blue-100 to-blue-600 dark:from-white dark:to-gray-100 bg-clip-text text-transparent text-center mb-4 pt-4 [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)] tracking-wider'>
            TOP STORIES
          </h5>
          <div>
            <div className='p-4'>
              <SurfCarousal />
            </div>
            <div className=''>
              <Image
                src={"/logo/logo.png"}
                alt='Logo'
                width={250}
                height={250}
                className='mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
