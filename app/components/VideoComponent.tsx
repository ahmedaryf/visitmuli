"use client";
import { useState, useEffect } from "react";

const VideoComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      const width = window.innerWidth;
      console.log("Window Width: ", width);
      setIsMobile(width <= 768);
    };

    // Initial check
    checkWindowSize();

    // Event listener for window resize
    window.addEventListener("resize", checkWindowSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <div className=''>
          <video autoPlay loop muted playsInline>
            <source src='/video/beach-v.mov' />
          </video>
        </div>
      )}
      {!isMobile && (
        <div className=''>
          <video autoPlay loop muted playsInline>
            <source src='/video/beach-2.mov' />
          </video>
        </div>
      )}
    </>
  );
};

export default VideoComponent;
