import GuesthouseActivities from "@/app/components/GuesthouseActivities";
import GuesthouseGallery from "@/app/components/GuesthouseGallery";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiWifi } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { IoLogoNoSmoking } from "react-icons/io";
import {
  MdOutlineCoffeeMaker,
  MdOutlineFreeBreakfast,
  MdRoomService,
} from "react-icons/md";
import { TbSpeedboat } from "react-icons/tb";
import PortableText from "react-portable-text";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "accommodationDetails"]`;
  const data = await client.fetch(query);
  return data;
}
async function getImageData() {
  const query = `*[_type == "accommodationDetails"][0].guesthouses`;
  const data = await client.fetch(query);
  return data;
}

export default async function GuesthouseSlug({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData();
  const imageData = await getImageData();

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
                        <h1 className='text-3xl md:text-6xl font-bold bg-gradient-to-b from-black to-gray-500 dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center  mb-4'>
                          {guesthouse.guesthouseName}
                        </h1>
                        <Image
                          src={urlForImage(guesthouse.guesthouseImage).url()}
                          alt={guesthouse.guesthouseName}
                          width={800}
                          height={500}
                          className='rounded-md mx-auto'
                        />
                        <div className='flex flex-wrap gap-4 md:gap-6 mt-4 mb-10'>
                          <div className='flex items-end gap-1'>
                            <div className='text-xl md:text-2xl'>
                              <TbSpeedboat />
                            </div>
                            <p className='text-xs md:text-sm'>
                              Airport Transfer
                            </p>
                          </div>
                          <div className='flex items-end gap-1'>
                            <div className='text-xl md:text-2xl'>
                              <BiWifi />
                            </div>
                            <p className='text-xs md:text-sm'>Free WiFi</p>
                          </div>
                          <div className='flex items-end gap-1'>
                            <div className='text-xl md:text-2xl'>
                              <MdRoomService />
                            </div>
                            <p className='text-xs md:text-sm'>Room service</p>
                          </div>
                          <div className='flex items-end gap-1'>
                            <div className='text-xl md:text-2xl'>
                              <GiMeal />
                            </div>
                            <p className='text-xs md:text-sm'>Restaurant</p>
                          </div>
                          <div className='flex items-end gap-1'>
                            <div className='text-xl md:text-2xl'>
                              <MdOutlineCoffeeMaker />
                            </div>
                            <p className='text-xs md:text-sm'>
                              Tea/coffee maker in all rooms
                            </p>
                          </div>
                          <div className='flex items-end gap-1'>
                            <div className='text-xl md:text-2xl'>
                              <IoLogoNoSmoking />
                            </div>
                            <p className='text-xs md:text-sm'>
                              Non-smoking rooms
                            </p>
                          </div>
                          <div className='flex items-end gap-1'>
                            <div className='text-xl md:text-2xl'>
                              <MdOutlineFreeBreakfast />
                            </div>
                            <p className='text-xs md:text-sm'>Good Breakfast</p>
                          </div>
                        </div>
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

        <div>
          <GuesthouseGallery imageData={imageData} params={params} />
        </div>
        <GuesthouseActivities imageData={imageData} params={params} />
      </div>
    </div>
  );
}
