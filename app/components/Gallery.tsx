"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

export default function GalleryImages({ images }: any) {
  const [selectedImage, setSelectedImage] = useState<any>("");
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const handleCloseClick = (e: React.MouseEvent) => {
    const targetNode = e.target as Node;
    if (
      imageContainerRef.current &&
      !imageContainerRef.current.contains(targetNode)
    ) {
      setSelectedImage("");
    }
  };

  return (
    <div className='p-4'>
      <div className=' px-2 my-3 grid grid-cols-gallery gap-4'>
        {images.map((item: any, index: any) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item.image || "")}
            className='p-1 border-2 rounded-lg cursor-pointer'>
            <div className=' relative h-40 overflow-hidden group'>
              <Image
                src={urlForImage(item.image).url()}
                fill={true}
                sizes='calc(100vw - 60px)'
                alt={item.title}
                className={`${
                  item.image === selectedImage ? "opacity-50" : "opacity-100"
                } rounded-lg object-cover group-hover:opacity-50`}
              />
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            onClick={handleCloseClick}
            className='bg-gray-500/90 p-2 fixed inset-0 w-full h-full flex flex-col justify-center items-center'>
            <MdClose
              onClick={() => setSelectedImage("")}
              size={32}
              className='mb-2 text-gray-100 dark:text-white cursor-pointer self-end me-4 md:m-10'
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, scale: 0.7, transition: { duration: 1 } }}
              className='rounded-lg bg-gold relative'
              ref={imageContainerRef}>
              <Image
                src={urlForImage(selectedImage).url()}
                width={900}
                height={700}
                alt='image'
                className='rounded-lg object-contain w-full h-full cursor-pointer'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
