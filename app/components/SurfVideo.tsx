"use client";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const opts: YouTubeProps["opts"] = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
};

export default function SurfVideo({ url }: any) {
  return (
    <div className='  mx-auto '>
      <div className='youtubePlayer'>
        <YouTube videoId={url} opts={opts} />
      </div>
    </div>
  );
}
