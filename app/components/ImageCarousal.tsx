"use client";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

export default function ImageCarousal() {
  const [current, setCurrent] = useState(0);
  const [imageData, setImageData] = useState<any>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const finalImageData = imageData.slice(0, 4);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `*[_type == "carousal"]`;
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prevCurrent) =>
        // Increment current index or reset to 0 if it reaches the end
        prevCurrent < finalImageData.length - 1 ? prevCurrent + 1 : 0
      );
    }, 5000);

    // Cleanup the interval when the component is unmounted or when 'current' changes
    return () => clearInterval(intervalId);
  }, [finalImageData]);

  // Function to navigate to previous image
  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  // Function to navigate to next image
  const onClick = () => {
    if (current < finalImageData.length - 1) {
      setCurrent(current + 1);
    }
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center'>
        <h5 className='text-5xl text-blue-600'>Loding...</h5>
      </div>
    );
  }
  return (
    <div className='flex flex-col dark:bg-black pt-16 md:pt-0'>
      <MotionConfig>
        <div className='flex flex-col justify-center items-center'>
          <div className='relative h-full md:w-[95vw] flex  overflow-hidden w-screen justify-center items-center'>
            <div className='flex absolute items-center justify-between z-20 left-2 right-2'>
              <BiSolidChevronLeft
                onClick={onPrevClick}
                className='text-3xl text-white cursor-pointer'
              />
              <BiSolidChevronRight
                onClick={onClick}
                className='text-3xl text-white cursor-pointer'
              />
            </div>
            <motion.div
              animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
              transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
              className='flex flex-nowrap gap-4 object-cover '>
              {finalImageData.map((item: any) => {
                return (
                  <Image
                    key={item._id}
                    src={urlForImage(item.image).url()}
                    alt='image'
                    width={3500}
                    height={2500}
                    className=' object-cover aspect-[16/9]'
                  />
                );
              })}
            </motion.div>

            <AnimatePresence>
              <div className='absolute left-10 md:top-[70%] lg:top-[75%] md:w-[45vw] text-white'>
                {finalImageData.map((item: any, index: any) => {
                  return index === current ? (
                    <motion.div
                      initial={{ x: "200", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      key={index}
                      className='flex flex-col'>
                      <h3 className='md:font-semibold mb-2 [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
                        {item.title}
                      </h3>
                      <p className='text-sm md:text-base text-justify [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)] pe-8'>
                        {item.description}
                      </p>
                    </motion.div>
                  ) : (
                    ""
                  );
                })}
              </div>
              <motion.div
                key={3}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
                className='absolute bottom-2 md:bottom-10 left-1/2 transform -translate-x-1/2'>
                <div className='flex px-2 md:gap-2 py-2 rounded-lg'>
                  {finalImageData.map((_: any, index: any) => {
                    return (
                      <button key={index} onClick={() => setCurrent(index)}>
                        <div
                          className={`w-14 rounded relative flex justify-center`}>
                          <div
                            className={`w-3 h-3 rounded-full  ${
                              current === index ? "bg-orange-100" : "bg-white"
                            }`}></div>
                        </div>
                      </button>
                    );
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
