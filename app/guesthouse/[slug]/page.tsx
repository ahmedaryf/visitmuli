import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Post } from "@/sanity/lib/interface";
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

export default async function GuesthouseSlug({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData();
  return (
    <div className='bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-gray-700 px4'>
      <div className='pt-12 md:pt-24 pb-24 md:w-[60vw] mx-auto'>
        <div className='ps-8 pt-6 mb-4 md:mb-0 w-9'>
          <Link href={"/accommodations"}>
            <FaArrowLeft size={28} color={"gray"} />
          </Link>
        </div>
        <div className='bg-gradient-to-b from-white to-white dark:from-gray-700/90  dark:to-gray-700 px-4 md:px-6 mt-2 pt-4 md:pt-6 pb-6 md:pb-10 rounded-md'>
          {data.map((item: any) =>
            item.guesthouses.map((guesthouse: any) => {
              return (
                <>
                  {params.slug === guesthouse.slug.current && (
                    <div key={item._id}>
                      <h1 className='text-3xl md:text-6xl font-bold bg-gradient-to-b from-blue-200 to-blue-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center  mb-4 '>
                        {item.title}
                      </h1>
                      <div className=''>
                        <h1 className='text-3xl md:text-6xl font-bold bg-gradient-to-b from-blue-100 to-blue-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center  mb-4'>
                          {guesthouse.guesthouseName}
                        </h1>
                        <Image
                          src={urlForImage(guesthouse.guesthouseImage).url()}
                          alt={guesthouse.guesthouseName}
                          width={800}
                          height={500}
                          className='rounded-md mx-auto'
                        />
                        <div className=' text-justify prose dark:prose-invert custom-prose'>
                          <PortableText
                            content={guesthouse.guesthouseDescription}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
