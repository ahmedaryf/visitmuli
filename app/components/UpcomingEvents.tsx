import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import PortableText from "react-portable-text";
import { format } from "date-fns";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "upcomingEvents"] `;

  const data = await client.fetch(query);

  return data;
}

export default async function UpcomingEvents() {
  const data = await getData();
  return (
    <div className='px-6'>
      {data.map((item: any) => (
        <div
          key={item._id}
          className='bg-white dark:bg-gray-700 border border-blue-200 dark:border-gray-200 shadow-xl p-4 rounded-lg'>
          <Image
            src={urlForImage(item.image).url()}
            width={400}
            height={200}
            alt={item.title}
            className='mx-auto rounded-lg'
          />
          <h5 className='text-xl md:text-2xl lg:text-2xl font-bold bg-gradient-to-b from-blue-100 to-blue-600 dark:from-white dark:to-gray-100 bg-clip-text text-transparent text-center mb-4 pt-4 tracking-wider'>
            {item.title}
          </h5>
          <div>
            <p className='text-sm mb-4 font-bold '>
              {format(new Date(item.date), "MMM - dd, yyyy")}
            </p>
          </div>
          <div>
            <PortableText content={item.description} />
          </div>
          {/* <div className='bg-blue-200 dark:bg-gray-500 py-1 border border-blue-300 dark:border-gray-200 hover:bg-blue-100 dark:hover:bg-gray-400 rounded-lg mt-6 cursor-pointer'>
            <p className='text-center text-blue-600 dark:text-white font-semibold '>
              Details
            </p>
          </div> */}
        </div>
      ))}
    </div>
  );
}
