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
    <div className='pb-6 md:px-6 bg-gradient-to-b from-transparent to-blue-200/30 dark:from-black  dark:to-gray-700'>
      <h1 className='text-5xl md:text-8xl font-bold bg-gradient-to-b from-blue-100 to-blue-600 dark:from-tranparent dark:to-gray-200 bg-clip-text text-transparent text-center pt-6 mb-4 [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
        Meemu Muli
      </h1>
      <div className='md:grid grid-cols-2'>
        {aboutData.map((item: any) => {
          return (
            <>
              <div key={item._id} className='m-auto  overflow-hidden'>
                <Image
                  src={urlForImage(item.image).url()}
                  alt='Muli'
                  objectFit='cover'
                  width={500}
                  height={500}
                  className=' '
                  layout='responsive'
                />
              </div>
              <div className=' px-2 '>
                <div className='prose dark:prose-invert text-justify px-4 md:px-0'>
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
  );
}
