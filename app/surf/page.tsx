import Image from "next/image";
import React from "react";
import SurfCarousal from "../components/SurfCarousal";
import { client } from "@/sanity/lib/client";
import PortableText from "react-portable-text";

async function getData() {
  const query = `*[_type == "surfDetailPage"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Surf() {
  const data = await getData();

  return (
    <div className='pt-24 pb-24 md:px-6 bg-gradient-to-b from-transparent to-blue-200/30 dark:from-black  dark:to-gray-700 w-screen'>
      <div>
        <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-b from-blue-100 to-blue-600 dark:from-white dark:to-gray-100 bg-clip-text text-transparent text-center pt-6 mb-4 [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
          Muli Surf Guide
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 md:px-4'>
        <div className=''>
          <SurfCarousal />
          <div className='hidden md:block'>
            <Image
              src={"/logo/logo-black.PNG"}
              alt='Logo'
              width={300}
              height={300}
              className='mx-auto'
            />
          </div>
        </div>
        <div className=' col-span-2'>
          {data.map((item: any) => {
            return (
              <div
                key={item._id}
                className='prose dark:prose-invert custom-prose text-justify px-4 pt-6 md:pt-0'
                style={{ marginTop: -20 }}>
                <PortableText content={item.content} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
