"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiSolidMoon } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='mr-6 text-black-800'>
      {theme === "dark" ? (
        <div className='text-orange-100 md:text-white'>
          <BsFillSunFill
            size={30}
            cursor='pointer'
            onClick={() => setTheme("light")}
          />
        </div>
      ) : (
        <div className='text-orange-100 md:text-white'>
          <BiSolidMoon
            size={30}
            cursor='pointer'
            onClick={() => setTheme("dark")}
          />
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;
