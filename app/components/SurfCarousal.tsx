"use client";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";

// ... (imports remain unchanged)

export default function SurfCarousal() {
  const [current, setCurrent] = useState(0);
  const [imageData, setImageData] = useState<any>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const finalImageData = imageData.slice(0, 3);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `*[_type == "surfDetailPage"]`;
        const data = await client.fetch(query);
        setImageData(data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const imageArray = imageData.map((item: any) => {
    return item.content;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(() => (current < 3 - 1 ? current + 1 : 0));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [current, imageArray]);

  if (loading) {
    return (
      <div className='flex justify-center items-center'>
        <h5 className='text-5xl text-blue-600'>Loading...</h5>
      </div>
    );
  }

  return (
    <div className='flex flex-col dark:bg-black'>
      <MotionConfig>
        <div className='flex flex-col justify-center'>
          <div className='relative flex overflow-hidden'>
            <motion.div
              animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
              transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
              className='flex flex-nowrap gap-4 object-cover'>
              {finalImageData.map((item: any) => {
                const img = item.images;

                return img.map((image: any) => (
                  <>
                    <Image
                      key={image._id}
                      src={urlForImage(image).url()}
                      alt='image'
                      width={3000}
                      height={3000}
                      className='object-cover aspect-[4/3]'
                    />
                  </>
                ));
              })}
            </motion.div>

            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
                className='absolute bottom-2 md:bottom-6 left-1/2 transform -translate-x-1/2'>
                <div className='flex px-2 md:gap-2 py-2 rounded-lg'>
                  {finalImageData.map((item: any) => {
                    const imag = item.images;
                    return imag.map((_: any, index: any) => (
                      <button key={index} onClick={() => setCurrent(index)}>
                        <div
                          className={`w-14 rounded relative flex justify-center`}>
                          <div
                            className={`w-3 h-3 rounded-full ${
                              current === index ? "bg-orange-100" : "bg-white"
                            }`}></div>
                        </div>
                      </button>
                    ));
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
}
