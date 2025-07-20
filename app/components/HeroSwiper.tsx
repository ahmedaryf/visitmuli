"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { urlForImage } from "@/sanity/lib/image";

export default function HeroSwiper({ data }: { data: any }) {
  return (
    <div className='md:h-screen overflow-hidden'>
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          speed={3000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}>
          {data &&
            data.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                {item.image && (
                  <Image
                    src={urlForImage(item.image).url()}
                    width={1000}
                    height={800}
                    alt={item.title}
                    className='aspect-[16/9] object-cover w-full h-[80vh] md:h-auto'
                  />
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
