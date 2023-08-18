import { urlFor } from '@/lib/sanity-client';
import { Skill } from '@/typings';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer"
    >
      <div className="relative rounded-full border bg-transparent border-gray-500 object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out overflow-hidden">
        <Image
          src={urlFor(skill.image).url()}
          alt={skill.title}
          fill
          style={{ objectFit: 'scale-down', padding: '1rem' }}
          unoptimized
        />
      </div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
