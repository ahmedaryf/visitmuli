import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import PortableText from "react-portable-text";
import Link from "next/link";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "placesToStay"]`;
  const data = client.fetch(query);
  return data;
}

export default async function PlacesToStay() {
  const aboutData = await getData();

  return (
    <div className='pb-6 pt-6 md:pt-10 md:px-6 bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-gray-700'>
      <div className='md:max-w-[90vw] lg:max-w-[80vw] mx-auto'>
        <h2 className='text-3xl md:text-6xl font-bold bg-gradient-to-b from-gray-700/80 to-gray-500 dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center pt-6 mb-4 py-1'>
          Cozy Retreats
        </h2>
        <div className='md:grid grid-cols-2'>
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
                  />
                </div>
                <div className=' px-2 '>
                  <div
                    className='prose dark:prose-invert text-justify px-4 md:px-0 pt-4 md:pt-0 line-clamp-4 md:line-clamp-6'
                    style={{ marginTop: -20 }}>
                    <div className='line-clamp-4 md:line-clamp-6'>
                      <PortableText content={item.content} />
                    </div>
                  </div>

                  <Link
                    href={"/accommodations"}
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
