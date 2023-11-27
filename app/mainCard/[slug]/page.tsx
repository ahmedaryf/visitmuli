import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Post } from "@/sanity/lib/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import PortableText from "react-portable-text";

export const revalidate = 60;

async function getData(slug: string) {
  const query = `*[_type == "homePageMainCards" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function MainCardSlug({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;
  return (
    <div className='bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-gray-700 px4'>
      <div className='pt-12 md:pt-24 pb-24 md:w-[60vw] mx-auto'>
        <div className='ps-8 pt-6 mb-4 md:mb-0 w-9'>
          <Link href={"/"}>
            <FaArrowLeft size={28} color={"gray"} />
          </Link>
        </div>
        <div className='bg-gradient-to-b from-white to-white dark:from-gray-700/90  dark:to-gray-700 px-4 md:px-6 mt-2 pt-4 md:pt-6 pb-6 md:pb-10 rounded-md'>
          <h1 className='text-3xl md:text-6xl font-bold bg-gradient-to-b from-blue-200 to-blue-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center  mb-4 '>
            {data.title}
          </h1>
          <div className=''>
            <Image
              src={urlForImage(data.image).url()}
              alt='Image'
              width={800}
              height={600}
              className='mb-6 rounded-lg mx-auto'
            />
            <div className=' text-justify prose dark:prose-invert custom-prose'>
              <PortableText content={data.content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
