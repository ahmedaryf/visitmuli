"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";

export default function GuesthouseGallery({
  imageData,
  params,
}: {
  params: any;
  imageData: any;
}) {
  const [selectedItems, setSelectedItems] = useState(
    Array(imageData.length).fill(0)
  );

  const handleItemClick = (productIndex: number, imageIndex: number) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = [...prevSelectedItems];
      newSelectedItems[productIndex] = imageIndex;
      return newSelectedItems;
    });
  };
  return (
    <div className='px-2'>
      {imageData.map((item: any, productIndex: number) => (
        <>
          {item.images && item.slug.current === params.slug && (
            <div
              key={item._id}
              className=' py-6 rounded-lg mb-4 bg-white dark:bg-gray-600'>
              <div className='relative p-2 md:h-[60vh] overflow-hidden flex justify-center items-center rounded-md'>
                <Image
                  src={urlForImage(
                    item.images[selectedItems[productIndex]]
                  ).url()}
                  width={800}
                  height={600}
                  alt={"image"}
                  className='mx-auto rounded-md object-cover aspect-[4/3]'
                />

                <div className=' bg-gradient-to-r from-black/50 to-transparent w-[80%] font-bold absolute left-6 md:left-10 bottom-6 md:bottom-10 ps-4 py-1 rounded-md'>
                  <h5 className='text-sm md:text-base tracking-wider text-white'>
                    {item.images[selectedItems[productIndex]].title}
                  </h5>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 items-center justify-center mb-4 mt-2 md:mt-6'>
                {item.images.map((image: any, imageIndex: any) => (
                  <div
                    onClick={() => handleItemClick(productIndex, imageIndex)}
                    key={image._id}
                    className='cursor-pointer'>
                    <Image
                      src={urlForImage(image).url()}
                      alt={"image"}
                      width={100}
                      height={100}
                      className={`${
                        imageIndex === selectedItems[productIndex] &&
                        "opacity-50"
                      } rounded w-16 md:w-24 aspect-[16/9]`}
                    />
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
