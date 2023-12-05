"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import PortableText from "react-portable-text";

export default function Accordions({ data }: any) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  function toggleAccordion(id: number) {
    setOpenAccordion((prevOpen) => (prevOpen === id ? null : id));
  }

  return (
    <div className='pb-10'>
      <div className='md:w-[80vw] mx-auto  px-4'>
        <h5 className='text-2xl md:text-5xl font-bold bg-gradient-to-b from-gray-700/80 to-gray-500 dark:from-white dark:to-gray-200 bg-clip-text text-transparent text-center mb-4 py-2'>
          Frequently Asked Question
        </h5>
        {data.map((item: any) => (
          <div key={item.id} className='pb-2 pt-1'>
            <button
              onClick={() => toggleAccordion(item.id)}
              className='text-sm md:text-base px-4 py-3 font-semibold bg-blue-200/20 dark:bg-gray-500/80 w-full text-start rounded-md'>
              {item.question} {item.name}
            </button>
            <Collapse isOpened={openAccordion === item.id}>
              <div className='text-sm md:text-base dark:prose-invert custom-prose text-justify px-4 bg-blue-100/10 dark:bg-gray-500 py-4 rounded-b-md'>
                <PortableText content={item.answer} />
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}
