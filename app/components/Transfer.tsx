import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import PortableText from "react-portable-text";

async function getData() {
  const query = `*[_type == "transfer"]{
  image,
 description
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Transfer() {
  const data = await getData();

  return (
    <div className='mb-10 py-4'>
      <div className='md:w-[60vw] mx-auto'>
        <div className='p-4'>
          <h3 className='text-3xl md:text-6xl font-bold bg-gradient-to-b from-gray-700/80 to-gray-500 dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center mb-4 '>
            Muli Transfer
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className=''>
              {data[0]?.image && (
                <Image
                  src={urlForImage(data[0].image).url()}
                  width={400}
                  height={300}
                  alt='image'
                  className='aspect-[16/9] object-cover rounded-md'
                />
              )}
            </div>
            <div>
              <div className='prose dark:prose-invert text-justify custom-prose'>
                {data[0]?.description && (
                  <PortableText content={data[0].description} />
                )}
              </div>
              <div className='flex gap-4 items-end'>
                <Link href={"https://projets.mv"}>
                  <Image
                    src={"/images/project.png"}
                    alt='project'
                    width={70}
                    height={70}
                    className=' object-contain'
                  />
                </Link>
                <Link href={"https://malasspeed.com"}>
                  <Image
                    src={"/images/malas-speed.png"}
                    alt='project'
                    width={70}
                    height={70}
                    className=' object-contain'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
