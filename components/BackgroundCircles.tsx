import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center top-1"
    >
      <div className="absolute border border-[#333333] rounded-full h-[20vh] w-[20vh] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[35vh] w-[35vh] mt-52 " />
      <div className="absolute border border-[#333333] rounded-full h-[60vh] w-[60vh] mt-52 " />
      <div className="absolute border border-primary-color rounded-full h-[80vh] w-[80vh] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[100vh] w-[100vh] mt-52 " />
    </motion.div>
  );
}

export default BackgroundCircles;
