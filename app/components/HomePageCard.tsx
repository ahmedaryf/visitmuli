import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import PortableText from "react-portable-text";
import Link from "next/link";

export const revalidate = 60;
async function getData() {
  const query = `*[_type == "homePageCardsSchema"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function HomePageCards() {
  const cardData = await getData();

  return (
    <>
      {cardData &&
        cardData.map((item: any) => (
          <div
            key={item.key}
            className='pb-6 pt-6 md:pt-10 px-4 md:px-6 bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-black/90'>
            <div className='bg-white dark:bg-gray-700 shadow-lg rounded-md mx-auto'>
              <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-b from-gray-100 to-black dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center pt-6 mb-2 '>
                {item.title}
              </h1>

              <div className=' px-2 pb-6 rounded-md '>
                <div className='overflow-hidden px-4'>
                  <Image
                    src={urlForImage(item.image).url()}
                    alt='Muli'
                    objectFit='cover'
                    width={500}
                    height={500}
                    className='rounded-md '
                  />
                </div>
                <div className='px-2'>
                  {item.content && (
                    <div className='prose dark:prose-invert text-justify px-4 md:px-0 line-clamp-3'>
                      {item.content && <PortableText content={item.content} />}
                    </div>
                  )}
                  <div className='pt-6'>
                    <Link
                      href={`../sideBar/${item.slug.current}`}
                      className=' font-semibold mt-2 ps-4 md:ps-0'>
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
