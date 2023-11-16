import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import PortableText from "react-portable-text";

async function getData() {
  const query = `*[_type == "surfSummery"]`;
  const data = await client.fetch(query, { next: { revalidate: 60 } });
  return data;
}

export const revalidate = 60;

export default async function SurfSummary() {
  const data = await getData();
  return (
    <div className='pt-12 md:pt-24 pb-24 md:px-6 bg-gradient-to-b from-transparent to-blue-200/30 dark:from-black  dark:to-gray-700 w-screen'>
      <div>
        <h2 className='flex flex-col text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-100 to-blue-500 dark:from-white dark:to-gray-100  bg-clip-text text-transparent text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)] pt-6 tracking-widest'>
          Your Ultimate{" "}
          <span className='text-3xl md:text-6xl font-bold bg-gradient-to-l from-blue-100 to-blue-500 dark:from-white dark:to-gray-100 bg-clip-text text-transparent text-center mb-4 [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)] tracking-wide py-2'>
            Surfing Destination
          </span>
        </h2>
      </div>
      <div>
        {data.map((item: any) => {
          return (
            <div key={item._id} className='grid grid-cols-2 gap-4'>
              <div className='prose dark:prose-invert text-justify px-4 md:px-0'>
                <PortableText content={item.content} />
              </div>
              <div>
                <Image
                  src={urlForImage(item.image).url()}
                  alt={item.title}
                  width={600}
                  height={600}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
