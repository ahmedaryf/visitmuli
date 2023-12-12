"use client";
import React, { ReactNode, useState, useEffect } from "react";
import StickyBox, { useStickyBox } from "react-sticky-box";

type PropType = {
  children: ReactNode;
};

export default function StickyBoxComponent({ children }: PropType) {
  const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
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
      {!isMobile ? (
        <StickyBox>
          <div ref={stickyRef}>{children}</div>
        </StickyBox>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
