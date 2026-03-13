import { client } from "@/sanity/lib/client";
import Link from "next/link";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "blog"]{
    slug,
    title,
    summary
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const posts = await getData();

  return (
    <div className='min-h-screen dark:bg-gray-600 flex flex-col items-center pb-10'>
      <div className='md:w-[60vw] '>
        <h1 className='text-4xl md:text-7xl text-center pt-24 font-bold'>
          Packages
        </h1>
        <div className='p-4 mt-8 md:mt-16 flex flex-col gap-8 lg:gap-12'>
          {posts.map((post: any) => (
            <div key={post._id}>
              {post.slug && (
                <Link href={`/packages/${post.slug.current}`} prefetch>
                  <h2 className='text-center text-base md:text-xl md:text-start font-semibold'>
                    {post.title}
                  </h2>
                  <p className='mt-2 text-sm md:text-base text-justify'>
                    {post.summary}
                  </p>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
