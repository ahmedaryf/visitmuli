"use client";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const youtubeId = [
  { url: "DepOLRHrJ_Y?si=CSJqZOZoz-WnAiw0" },
  { url: "99EzE-ZA-_I?si=C9F1IlKHmjBpS3IF" },
];

const opts: YouTubeProps["opts"] = {
  height: "290",
  width: "440",
  playerVars: {
    autoplay: 0,
  },
};

export default function YouTubeComponent({ url }: any) {
  return (
    <div className='dark:bg-black'>
      <div className='md:w-[80vw] mx-auto '>
        <h3 className='text-4xl text-center font-bold pt-4'>Videos</h3>

        <div className=' p-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {url.map((uId: any, index: any) => (
            <div key={index} className='youtubePlayer'>
              <YouTube videoId={uId.url} opts={opts} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
