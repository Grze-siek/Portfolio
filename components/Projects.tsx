'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/lib/sanity-client';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen relative flex justify-evenly items-center overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-50 mb-10">
        Projects
      </h3>

      <div className="relatice w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary-color">
        {projects?.map((project, i) => (
          <motion.div
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={project._id}
          >
            <Image
              key={project._id}
              src={urlFor(project.image).url()}
              alt={project.title}
              height={300}
              width={300}
            />
            <div className="space-y-10 px-0 md:px-10">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-primary-color decoration-opacity-50">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-4 justify-center">
                {project.technologies?.map((technology) =>
                  technology ? (
                    <Image
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt={technology.title}
                      height={20}
                      width={20}
                      className="rounded-full h-10 w-10 object-cover"
                      unoptimized
                    />
                  ) : null
                )}
              </div>

              <p className="ext-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
            <a href={project.linkToBuild} target="_blank">
              <button className="heroButton animate-pulse border-[2px] border-gray-600">
                See the Build
              </button>
            </a>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute bg-primary-color opacity-10 top-[30%] left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
