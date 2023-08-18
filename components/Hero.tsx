'use client';
import { urlFor } from '@/lib/sanity-client';
import { PageInfo } from '@/typings';
import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { motion } from 'framer-motion';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo?.name}`,
      'An-aspiring-web-developer.tsx',
      'Type Error: And an error solver',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <BackgroundCircles />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
      >
        <div className="relative h-[20vh] w-[20vh]">
          <Image
            src={urlFor(pageInfo.heroImage).url()}
            alt="portfolio pic"
            height={300}
            width={300}
            className="relative rounded-full object-cover overflow-hidden"
          />
        </div>
      </motion.div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl max-md:min-h-[75px] md:text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          {/* <a href="#experience">
            <button className="heroButton">Experience</button>
          </a> */}
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
