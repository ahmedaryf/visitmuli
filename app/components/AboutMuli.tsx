import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import PortableText from "react-portable-text";
import Link from "next/link";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "aboutMuli"]{
  image,
  description,
  _id
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function AboutMuli() {
  const aboutData = await getData();

  return (
    <div className='pb-6 md:px-6 bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-gray-700 pt-6 md:pt-10'>
      <div className='md:max-w-[90vw] lg:max-w-[80vw] mx-auto'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-b from-gray-700/80 to-gray-500 dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center pt-6 mb-4 md:mb-8 '>
          Aqua Ink Maldives
        </h1>
        <div className=''>
          {aboutData &&
            aboutData.map((item: any) => {
              return (
                <div key={item._id} className='md:grid grid-cols-2 gap-4'>
                  <div className=' overflow-hidden px-4'>
                    {item.image && (
                      <Image
                        src={urlForImage(item.image).url()}
                        alt='Muli'
                        width={500}
                        height={500}
                        className='rounded-md aspect-[16/9] object-cover w-full'
                      />
                    )}
                  </div>
                  <div className=' px-2 '>
                    <div
                      className='prose dark:prose-invert px-4 md:px-0 pt-4 md:pt-0 line-clamp-6'
                      style={{ marginTop: -20 }}>
                      {item.description && (
                        <PortableText content={item.description} />
                      )}
                    </div>

                    <Link
                      href={"/about"}
                      className='rounded font-bold  mt-2 ps-4 md:ps-0'>
                      Read more...
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
