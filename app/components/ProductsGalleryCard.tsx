"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";
import { differenceInMilliseconds } from "date-fns";

export default function ProductsGalleryCard({ product }: any) {
  const [selectedItems, setSelectedItems] = useState(
    Array(product.length).fill(0)
  );

  function isNew(product: any) {
    const TWO_DAYS_IN_MILLISECONDS = 1 * 24 * 60 * 60 * 1000;
    const productDate = new Date(product._createdAt);
    const currentDate = new Date();
    const difference = differenceInMilliseconds(currentDate, productDate);

    return difference <= TWO_DAYS_IN_MILLISECONDS;
  }

  const handleItemClick = (productIndex: number, imageIndex: number) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = [...prevSelectedItems];
      newSelectedItems[productIndex] = imageIndex;
      return newSelectedItems;
    });
  };

  return (
    <div className='px-6 grid grid-cols-1 md:grid-cols-4 gap-4'>
      {product.map((item: any, productIndex: number) => (
        <div
          key={item._id}
          className='px-4 lg:px-12 py-6 border-2 border-blue-300/40 dark:border-gray-400 rounded-lg shadow-xl mb-4 bg-white dark:bg-gray-600 w-full'>
          {isNew(item) ? (
            <div className='flex justify-end'>
              <p className='bg-green-200 dark:bg-gray-400 text-xs px-2 rounded-lg text-white'>
                New
              </p>
            </div>
          ) : (
            ""
          )}
          <h5 className='text-xl md:text-2xl lg:text-2xl font-bold bg-gradient-to-b from-blue-200 to-blue-700 dark:from-white dark:to-gray-100 bg-clip-text text-transparent text-center tracking-wider'>
            {item.productName}
          </h5>
          <div className=' p-2 min-h-[35vh] overflow-hidden flex justify-center items-center'>
            <Image
              src={urlForImage(item.images[selectedItems[productIndex]]).url()}
              width={200}
              height={150}
              alt={item.productName}
              className='mx-auto'
            />
          </div>

          <div className='flex gap-2 items-center justify-center mb-4'>
            {item.images.map((image: any, imageIndex: any) => (
              <div
                onClick={() => handleItemClick(productIndex, imageIndex)}
                key={image._id}
                className='cursor-pointer'>
                <Image
                  src={urlForImage(image).url()}
                  alt={item.productName}
                  width={50}
                  height={50}
                  className={`${
                    imageIndex === selectedItems[productIndex] && "opacity-50"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className='flex gap-4 justify-between'>
            <p className='text-xs text-gray-500 dark:text-gray-100 font-semibold'>
              Color: {item.color}
            </p>
            <p className='text-xs text-gray-600 dark:text-gray-100 font-semibold'>
              Price: ${item.price}
            </p>
            {item.quantity < 1 ? (
              <p className='text-xs font-semibold text-orange-500 dark:text-gray-100'>
                Out of stock
              </p>
            ) : (
              <p className='text-xs text-gray-500 dark:text-gray-100 font-semibold'>
                In stock: {item.quantity}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
