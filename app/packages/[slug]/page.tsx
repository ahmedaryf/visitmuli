import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import PortableText from "react-portable-text";

export const revalidate = 60;

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == "${slug}"][0]{
    title,
    content,
    images
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getData(params.slug);

  return (
    <>
      <div className='py-24  dark:bg-gray-700'>
        <div className=' px-4 md:w-[70vw] mx-auto'>
          <div className='pb-10'>
            <Link href={"/packages"} className='text-4xl text-teal-700'>
              <FaAngleLeft />
            </Link>
          </div>
          <h1 className='text-xl mb-4 text-center md:text-start font-semibold'>
            {post.title}
          </h1>
          <div className='prose dark:prose-invert custom-prose text-justify'>
            {post.content && <PortableText content={post.content} />}
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {post.images &&
              post.images.map((image: any, index: number) => (
                <div key={index}>
                  <Image
                    src={urlForImage(image).url()}
                    width={300}
                    height={200}
                    alt='Image'
                    className='aspect-[4/3] object-cover rounded-lg'
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
