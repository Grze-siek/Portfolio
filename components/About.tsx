'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '@/lib/sanity-client';
import * as React from 'react';

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="flex flex-col relative h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="flex-shrink-0 -mb-20 md:mb-0"
      >
        <Image
          src={urlFor(pageInfo.profilePic).url()}
          height={600}
          width={550}
          alt=""
          className="h-56 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-92 xl:w-[620px] xl:h-[600px]"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-primary-color">little</span>{' '}
          background
        </h4>
        <p className="text-sm md:text-md lg:text-lg">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
