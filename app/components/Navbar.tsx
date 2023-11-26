"use client";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Surf",
    url: "/surf",
  },
  {
    name: "Activities",
    url: "/activities",
  },

  {
    name: "Accommodations",
    url: "/accommodations",
  },
  {
    name: "Gallery",
    url: "/gallery",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];

const containerVars = {
  initial: {
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.09, // Adjust the stagger delay as needed
    },
  },
  open: {
    transition: {
      staggerDirection: 1,
      staggerChildren: 0.09, // Adjust the stagger delay as needed
      delayChildren: 0.02,
    },
  },
};

const linkVars = {
  initial: {
    y: "30vh",
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.12, 0, 0.39, 1],
      duration: 1,
    },
  },
};

const menuVars = {
  initial: {
    y: -500,
    opacity: 0,
    scaleY: 0,
    scaleX: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    scaleY: 1,
    scaleX: 1,
  },
  exit: {
    y: -500,
    opacity: 0,
    scaleY: 0,
    scaleX: 0,
    transition: { delay: 0.5, duration: 0.5 },
  },
};

export default function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  return (
    <>
      {path !== "/admin" ? (
        <nav className=' duration-1000 px-2 md:px-10  flex justify-between items-center fixed w-screen z-50'>
          <div className='flex justify-between w-screen items-center'>
            <div className='flex justify-center items-center'>
              <Link
                href={"/"}
                className='text-xl flex justify-center items-center'>
                <Image
                  src={"/logo/logo.PNG"}
                  alt='visitmuli Logo'
                  width={60}
                  height={60}
                  className='md:w-[70px] md:h-[70px],'
                />
              </Link>
            </div>
            <div className='block md:hidden'>
              <ThemeToggle />
            </div>
            {/* <ThemeToggle /> */}
            {isOpen ? (
              <MdClose
                onClick={() => setIsOpen(false)}
                size={32}
                className='block md:hidden text-orange-100 '
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setIsOpen(true)}
                size={32}
                className='block md:hidden text-orange-100 '
              />
            )}
          </div>

          {/* Desktop Navbar */}
          <AnimatePresence>
            {isNavbarOpen ? (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, ease: "linear" }}
                exit={{ y: -100, opacity: 0, transition: { duration: 0.3 } }}
                className='hidden md:block md:bg-gradient-to-t from-blue-200/60 via-blue-500 to-blue-200/60 dark:from-orange-200/60 dark:via-orange-500 dark:to-orange-200/60 duration-500 px-8 py-2 rounded-3xl'>
                <ul className=' hidden md:flex'>
                  <ThemeToggle />
                  {navLinks.map((navItem, index) => {
                    return (
                      <li className='mx-4' key={index}>
                        <Link
                          href={navItem.url}
                          className='text-primary md:text-white font-bold relative tracking-wider md:text-base'>
                          {navItem.url === path && (
                            <motion.span
                              layoutId='underline'
                              className='absolute left-0 top-full bg-white  block h-[3px] w-full'></motion.span>
                          )}
                          {navItem.name}
                        </Link>
                      </li>
                    );
                  })}
                  <div className='flex ms-4 gap-1 justify-center items-center'>
                    <Link
                      href={
                        "https://www.facebook.com/people/visitmuli/61553317496665/"
                      }>
                      <AiFillFacebook size={22} color={"white"} />
                    </Link>
                    <Link
                      href={
                        "https://instagram.com/visitmuli?igshid=NGVhN2U2NjQ0Yg=="
                      }>
                      <AiFillInstagram size={22} color={"white"} />
                    </Link>
                    <Link
                      href={
                        "https://youtube.com/@visitmuli?si=sETJuYKSK7a5NkR3"
                      }>
                      <FaYoutubeSquare size={20} color={"white"} />
                    </Link>
                  </div>
                </ul>
              </motion.div>
            ) : (
              ""
            )}
          </AnimatePresence>

          {isNavbarOpen ? (
            <div
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              className='hidden md:block ms-4 bg-blue-400/80 dark:bg-orange-400/80 rounded-full p-2 cursor-pointer shadow-xl'>
              <MdClose size={32} className=' text-white' />
            </div>
          ) : (
            <div
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              className='hidden md:block ms-4 bg-blue-400/80 dark:bg-orange-400/80 rounded-full p-2 cursor-pointer shadow-xl'>
              <GiHamburgerMenu size={32} className=' text-white' />
            </div>
          )}
          {/* Mobile Navbar */}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVars}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{
                  duration: 0.5,
                  // ease: [0.12, 0, 0.39, 0],
                }}
                className='block md:hidden absolute inset-0 h-screen w-screen bg-gradient-to-r from-blue-300 to-blue-600 dark:from-black dark:to-orange-700 pt-5 pb-10 z-50'>
                <motion.div
                  variants={containerVars}
                  initial='initial'
                  animate='open'
                  exit='initial'>
                  <div
                    className='flex justify-end pe-4'
                    onClick={() => setIsOpen(false)}>
                    <MdClose size={32} className=' text-white' />
                  </div>
                  {navLinks.map((navItem, index) => {
                    return (
                      <div key={index} className='overflow-hidden pt-5'>
                        <motion.h5
                          variants={linkVars}
                          className='mx-4 py-4 text-center'
                          key={index}>
                          <Link
                            onClick={() => setIsOpen(false)}
                            href={navItem.url}
                            className='text-2xl text-white [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
                            {navItem.name}
                          </Link>
                        </motion.h5>
                      </div>
                    );
                  })}
                </motion.div>
                <div className='flex justify-center gap-6 w-screen mt-8'>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={
                      "https://www.facebook.com/people/visitmuli/61553317496665/"
                    }>
                    <AiFillFacebook size={22} color={"white"} />
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={
                      "https://instagram.com/visitmuli?igshid=NGVhN2U2NjQ0Yg=="
                    }>
                    <AiFillInstagram size={22} color={"white"} />
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={"https://youtube.com/@visitmuli?si=sETJuYKSK7a5NkR3"}>
                    <FaYoutubeSquare size={20} color={"white"} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}
