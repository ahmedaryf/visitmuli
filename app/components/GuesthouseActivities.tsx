"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

export default function GuesthouseActivities({
  imageData,
  params,
}: {
  params: any;
  imageData: any;
}) {
  return (
    <div className='px-2 mt-10'>
      <h3 className='text-2xl md:text-4xl text-center font-bold'>Activities</h3>
      {imageData &&
        imageData.map((item: any) => (
          <>
            {item.slug.current === params.slug && (
              <div
                key={item._id}
                className='rounded-lg mb-4 bg-white dark:bg-gray-600'>
                <div className='relative p-2  overflow-hidden flex justify-center items-center gap-4 flex-wrap rounded-md'>
                  {item.activities &&
                    item.activities.map((activity: any) => (
                      <div key={activity._id}>
                        <div>
                          <Image
                            src={urlForImage(activity).url()}
                            width={250}
                            height={200}
                            alt={"image"}
                            className='mx-auto rounded-md object-cover w-40 md:w-48'
                          />
                        </div>
                        <h5 className='text-sm md:text-base tracking-wider mt-2 text-center font-semibold'>
                          {activity.title}
                        </h5>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </>
        ))}
    </div>
  );
}
