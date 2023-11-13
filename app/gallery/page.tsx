import Image from "next/image";
import React from "react";

export default function Gallery() {
  return (
    <div className='flex flex-col items-center justify-center pb-6'>
      <h1 className='text-7xl font-bold text-center pt-24 mb-6'>Gallery</h1>
      <Image
        src={"/images/IMG_3894.JPG"}
        alt='Image'
        width={1000}
        height={1000}
        className=' aspect-[16/9]'
      />
    </div>
  );
}
