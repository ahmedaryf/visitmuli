import Image from "next/image";
import React from "react";
import { client } from "@/sanity/lib/client";
import PortableText from "react-portable-text";
import { urlForImage } from "@/sanity/lib/image";
import UpcomingEvents from "../components/UpcomingEvents";
import Products from "../components/Products";
import Motion from "../components/Motion";
import StickyBoxComponent from "../components/StickyBox";
import SurfVideo from "../components/SurfVideo";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "surfDetailPage"]{
  bannerImage,
  image,
  content,
  description,
  video,
  _id,
  title
  }`;
  const data = await client.fetch(query);
  return data;
}
async function getProductData() {
  const query = `*[_type == "products"] `;

  const data = await client.fetch(query);

  return data;
}

export default async function Surf() {
  const data = await getData();
  const product = await getProductData();

  return (
    <div className='pb-24 md:px-6 bg-gradient-to-b from-transparent to-white/50 dark:from-black  dark:to-gray-700 w-screen'>
      <div className='w-full md:h-[90vh] overflow-hidden relative'>
        {data &&
          data.map((image: any) => (
            <div key={image._id}>
              {image.bannerImage && (
                <Image
                  src={urlForImage(image.bannerImage).url()}
                  alt='Image'
                  width={3000}
                  height={200}
                  className=' aspect-[16/9]'
                />
              )}{" "}
            </div>
          ))}
        <div className='flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2  bg-white/40 dark:bg-black/60 py-2 w-full'>
          <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-b from-orange-100 to-orange-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent'>
            Surf Guide
          </h1>
          <h5 className='text-orange-600 dark:text-gray-300 font-semibold text-xs md:text-xl'>
            Your Ultimate Surf Guide Experience
          </h5>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8 md:px-4 mt-16  md:w-[90vw] mx-auto'>
        <div className='col-span-2'>
          {data &&
            data.map((item: any) => {
              return (
                <div key={item._id} className='px-4'>
                  <div className=''>
                    {item.image && (
                      <Image
                        src={urlForImage(item.image).url()}
                        alt={item.title}
                        width={1000}
                        height={800}
                        className='mx-auto aspect-[16/9] pb-4 rounded-md object-cover'
                      />
                    )}
                  </div>

                  <div
                    className='prose dark:prose-invert custom-prose text-justify pt-6 md:pt-0'
                    style={{ marginTop: -20 }}>
                    {item.content && <PortableText content={item.content} />}
                  </div>
                </div>
              );
            })}

          {data &&
            data.map(
              (item: any) =>
                item.images &&
                item.images.map((image: any) => (
                  <div key={image._id} className='px-4 mb-10'>
                    <Motion>
                      {image.video ? (
                        <SurfVideo url={image.video} />
                      ) : (
                        <Image
                          src={urlForImage(image).url()}
                          width={1000}
                          height={800}
                          alt={image.title}
                          className=' aspect-[16/9] object-cover'
                        />
                      )}
                      {image.description ? (
                        <div className='prose dark:prose-invert text-justify custom-prose'>
                          {image.description && (
                            <PortableText content={image.description} />
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </Motion>
                  </div>
                )),
            )}
        </div>
        {/* Sidebar */}
        <StickyBoxComponent>
          <div className='px-4 md:px-0 bg-gradient-to-b md:border-l-2 border-t-2 border-blue-200/50 dark:border-gray-300/40 rounded-md'>
            <div>
              <h5 className='text-xl md:text-2xl lg:text-2xl font-bold bg-gradient-to-b from-blue-200 to-blue-700 dark:from-white dark:to-gray-100 bg-clip-text text-transparent text-center mb-4 pt-4  tracking-wider'>
                UPCOMING EVENTS
              </h5>
              <UpcomingEvents />
            </div>

            <div className='mt-10'>
              <h5 className='text-xl md:text-2xl lg:text-2xl font-bold bg-gradient-to-b from-blue-200 to-blue-700 dark:from-white dark:to-gray-100 bg-clip-text text-transparent text-center mb-4 pt-4  tracking-wider'>
                PRODUCTS
              </h5>
              <div>
                <Products product={product} />
              </div>
            </div>
          </div>
        </StickyBoxComponent>
        <div></div>
      </div>
    </div>
  );
}
