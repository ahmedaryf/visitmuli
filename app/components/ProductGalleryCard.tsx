"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductGalleryCard({ imageData }: { imageData: any }) {
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
    <div className='px-2 mt-10'>
      {imageData.map((item: any, productIndex: number) => (
        <>
          {
            <div
              key={item._id}
              className=' py-6 rounded-lg mb-4 bg-[#00314E]/40 dark:bg-black/50'>
              <div className='p-2 md:px-24'>
                <div className='relative overflow-hidden flex justify-center items-center rounded-md '>
                  <Image
                    src={urlForImage(
                      item.productImage[selectedItems[productIndex]]
                    ).url()}
                    width={500}
                    height={400}
                    alt={"image"}
                    className='mx-auto rounded-lg object-contain'
                  />
                </div>
              </div>

              <div className='flex flex-wrap gap-2 items-center justify-center mb-4 mt-2 md:mt-6'>
                {item.productImage.map((image: any, imageIndex: any) => (
                  <div
                    onClick={() => handleItemClick(productIndex, imageIndex)}
                    key={imageIndex}
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
          }
        </>
      ))}
    </div>
  );
}
