"use client";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { useState, useEffect } from "react";
import PortableText from "react-portable-text";

import BackButton from "../components/BackButton";

export default function AboutPage() {
  const [aboutMuliDetails, setAboutMuliDetails] = useState<any>([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `*[_type == "aboutMuliDetails"]`;
        const data = await client.fetch(query);
        setAboutMuliDetails(data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <h5 className='text-5xl text-blue-700'>Loding...</h5>
      </div>
    );
  }
  return (
    <div className=' bg-gradient-to-b dark:from-black dark:to-gray-600 pb-12 md:px-6 md:pb-24'>
      <div className='w-full md:h-[60vh] overflow-hidden relative'>
        {aboutMuliDetails.map((image: any) => (
          <Image
            key={image._id}
            src={urlForImage(image.bannerImage).url()}
            alt='Image'
            width={3000}
            height={200}
            layout='responsive'
            className=' aspect-[16/9]'
          />
        ))}
        <div className='w-full flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 bg-white/40 dark:bg-black/60 py-2'>
          <h1 className='text-5xl md:text-8xl font-bold bg-gradient-to-b from-orange-100 to-orange-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
            Welcome to Muli
          </h1>
          <h5 className='text-orange-600 dark:text-gray-300 font-semibold text-xs md:text-xl'>
            The Ultimate Surf Haven: Where Every Wave is an Adventure!
          </h5>
        </div>
      </div>
      <div className='ps-6 pt-6 mb-4 md:mb-0 text-xl md:text-3xl'>
        <BackButton />
      </div>

      <div>
        {aboutMuliDetails.map((item: any) => {
          return (
            <div key={item._id} className=''>
              <div className='w-[90vw] md:w-[85vw] mx-auto'>
                <h5 className='text-3xl md:text-5xl font-bold bg-gradient-to-b from-blue-100 to-blue-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent pt-6 md:pt-16 pb-2 md:pb-4 [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)] text-center tracking-wider'>
                  {item.title}
                </h5>
                <div className='md:grid md:grid-cols-2 md:px-6 '>
                  <div className='mx-auto'>
                    {
                      <Image
                        src={urlForImage(item.image).url()}
                        alt={item.title}
                        width={600}
                        height={500}
                        className='md:rounded-lg'
                      />
                    }
                  </div>
                  <div className='mt-6 md:-mt-6 prose dark:prose-invert  text-justify ps-2 md:ps-6'>
                    <PortableText content={item.content} />
                  </div>
                </div>
              </div>
              <div className='w-[90vw] md:w-[85vw] mx-auto pt-24'>
                {item.subContent.map((image: any) => {
                  return (
                    <div
                      key={image._id}
                      className='grid grid-cols-1 md:grid-cols-2 gap-2 bg-gradient-to-b from-transparent to-blue-200/20 dark:from-gray-700 dark:to-black/70 cardPattern rounded-md md:rounded-lg p-4 border-2 border-blue-300/50 dark:border-gray-400 shadow-2xl'>
                      <div className='mx-auto'>
                        <Image
                          src={urlForImage(image).url()}
                          alt={image.title}
                          width={400}
                          height={300}
                          className='rounded-t md:rounded-lg'
                        />
                      </div>
                      <div className=''>
                        <h5 className='text-2xl md:text-4xl font-bold bg-gradient-to-b from-blue-100 to-blue-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent  [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)] text-center tracking-wider pb-6'>
                          {image.title}
                        </h5>
                        <div className='mt-6 md:-mt-6 prose dark:prose-invert  text-justify ps-2 md:ps-6'>
                          <PortableText content={image.content} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
