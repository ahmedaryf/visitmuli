"use client";
import React from "react";
import YouTube from "react-youtube";

const opts = {
  height: "100%",
  hidth: "100%",
  playerVars: {
    autoplay: 0,
  },
};

export default function Activities() {
  return (
    <div className='h-screen'>
      <h1 className='pt-24 text-5xl font-bold text-center'>Activity</h1>
      <div className='md:w-[60vw]'>
        <div className={"youtubePlayer"}>
          <YouTube videoId={"4Ff2ZrhVkp0"} opts={opts} />
        </div>
      </div>
    </div>
  );
}
