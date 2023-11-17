"use client";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PortableText from "react-portable-text";

export default function SurfSummary() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const query = `*[_type == "surfSummery"]`;
      const fetchedData = await client.fetch(query);
      setData(fetchedData);
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <h5 className='text-5xl'>Loading</h5>
      </div>
    );
  }
  return (
    <div className='pt-12 md:pt-16 pb-24 md:px-6 bg-gradient-to-b from-transparent to-blue-200/30 dark:from-black  dark:to-gray-700 w-screen'>
      <div>
        <h2 className='flex flex-col text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-100 to-blue-500 dark:from-white dark:to-gray-100  bg-clip-text text-transparent text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)] pt-6 tracking-[6px] md:tracking-[8px]'>
          Your Ultimate
          <span className='text-3xl md:text-6xl font-bold bg-gradient-to-l from-blue-100 to-blue-500 dark:from-white dark:to-gray-100 bg-clip-text text-transparent text-center mb-4 [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)] tracking-wider -mt-2'>
            Surfing Destination
          </span>
        </h2>
      </div>
      <div>
        {data.map((item: any) => {
          return (
            <div
              key={item._id}
              className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='block md:hidden px-4'>
                <Image
                  src={urlForImage(item.image).url()}
                  alt={item.title}
                  width={600}
                  height={600}
                  className='rounded-md'
                />
              </div>
              <div>
                <div
                  className='prose dark:prose-invert text-justify px-4 md:px-0'
                  style={{ marginTop: -20 }}>
                  <PortableText content={item.content} />
                </div>
                <Link
                  href={"/surf"}
                  className='rounded font-bold  mt-2 ps-4 md:ps-0'>
                  Read more...
                </Link>
              </div>

              <div className='hidden md:block'>
                <Image
                  src={urlForImage(item.image).url()}
                  alt={item.title}
                  width={600}
                  height={600}
                  className='rounded-md'
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
