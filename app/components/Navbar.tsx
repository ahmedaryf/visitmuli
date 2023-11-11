"use client";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  {
    name: "Home",
    url: "/",
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
    name: "Blog",
    url: "/blog",
  },
];
const Logo = "/logo/logo.PNG";

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

  return (
    <>
      {path !== "/admin" ? (
        <nav className=' md:bg-gradient-to-t from-secondaryLight/30 via-secondary to-secondaryLight duration-1000 px-4  flex justify-between items-center fixed w-screen z-50'>
          <div className='flex justify-between w-full items-center'>
            <Link href={"/"} className='text-xl'>
              <Image
                src={Logo}
                alt='Logo'
                width={60}
                height={60}
                className='md:w-[60px] md:h-[60px],'
              />
            </Link>
            <ThemeToggle />
            {isOpen ? (
              <MdClose
                onClick={() => setIsOpen(false)}
                size={32}
                className='block md:hidden text-primaryLight '
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setIsOpen(true)}
                size={32}
                className='block md:hidden text-primaryLight '
              />
            )}
          </div>
          {/* Desktop Navbar */}
          <div>
            <ul className=' hidden md:flex'>
              {navLinks.map((navItem, index) => {
                return (
                  <li className='mx-4' key={index}>
                    <Link
                      href={navItem.url}
                      className='text-primary md:text-white dark:text-gray-300 font-bold relative tracking-wider md:text-base'>
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
            </ul>
          </div>
          {/* Mobile Navbar */}

          <AnimatePresence mode='wait'>
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
                className='block md:hidden absolute left-0 top-28 w-full bg-gradient-to-r from-secondaryDark/60 to-secondaryLight dark:from-secondaryDark dark:to-secondary min-h-[50vh] pt-5 z-50'>
                <motion.div
                  variants={containerVars}
                  initial='initial'
                  animate='open'
                  exit='initial'>
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
                            className='text-3xl text-white [text-shadow:_4px_1px_2px_rgb(0_0_0_/_30%)]'>
                            {navItem.name}
                          </Link>
                        </motion.h5>
                      </div>
                    );
                  })}
                </motion.div>
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
