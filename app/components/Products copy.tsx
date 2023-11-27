"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";

export default function Products({ product }: any) {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div className='px-6'>
      {product.map((item: any) => (
        <div
          key={item._id}
          className='px-12 py-6 border-2 border-blue-300/40 rounded-lg shadow-xl'>
          <h5 className='text-xl md:text-2xl lg:text-2xl font-bold bg-gradient-to-b from-blue-100 to-blue-600 dark:from-white dark:to-gray-100 bg-clip-text text-transparent text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)] tracking-wider'>
            {item.productName}
          </h5>
          <div className=''>
            <Image
              src={urlForImage(item.images[selectedItem]).url()}
              width={300}
              height={200}
              alt={item.productName}
              className='mx-auto'
            />
          </div>

          <div className='flex items-center justify-center mb-4'>
            {item.images.map((image: any, index: any) => (
              <div
                onClick={() => setSelectedItem(index)}
                key={index}
                className='cursor-pointer'>
                <Image
                  src={urlForImage(image).url()}
                  alt={item.productName}
                  width={60}
                  height={60}
                  className={`${index === selectedItem && "opacity-50"}`}
                />
              </div>
            ))}
          </div>

          <div className='flex justify-between'>
            <p className='text-xs text-gray-500'>Color: {item.color}</p>
            <p className='text-xs text-gray-600 font-semibold'>
              Price: ${item.price}
            </p>
            <p className='text-xs text-gray-500'>In stock: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
