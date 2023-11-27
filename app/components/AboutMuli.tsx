"use client";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { useState, useEffect } from "react";
import PortableText from "react-portable-text";
// import { PortableText } from "@portabletext/react";

import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";

export default function AboutMuli() {
  const [aboutData, setAboutData] = useState<any>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const components: PortableTextComponents = {
    block: {
      // Ex. 1: custom renderer for paragraph (p) elements
      h1: ({ children }) => <h1 style={{ fontWeight: "bold" }}>{children}</h1>,
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `*[_type == "aboutMuli"]`;
        const data = await client.fetch(query);
        setAboutData(data);
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
    <div className='pb-6 md:px-6 bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-gray-700 pt-6 md:pt-10'>
      <div className='md:max-w-[90vw] lg:max-w-[80vw] mx-auto'>
        <h1 className='text-5xl md:text-8xl font-bold bg-gradient-to-b from-blue-200 to-blue-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center pt-6 mb-4 '>
          Meemu Muli
        </h1>
        <div className='md:grid grid-cols-2 gap-4'>
          {aboutData.map((item: any) => {
            return (
              <>
                <div key={item._id} className='m-auto  overflow-hidden px-4'>
                  <Image
                    src={urlForImage(item.image).url()}
                    alt='Muli'
                    objectFit='cover'
                    width={500}
                    height={500}
                    className='rounded-md '
                    // layout='responsive'
                  />
                </div>
                <div className=' px-2 '>
                  <div
                    className='prose dark:prose-invert text-justify px-4 md:px-0 pt-4 md:pt-0 line-clamp-6'
                    style={{ marginTop: -20 }}>
                    <PortableText content={item.description} />
                  </div>

                  <Link
                    href={"/about"}
                    className='rounded font-bold  mt-2 ps-4 md:ps-0'>
                    Read more...
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
