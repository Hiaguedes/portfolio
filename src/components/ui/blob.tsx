"use client";
import { FC } from "react";

import { motion } from 'framer-motion';

const Blob: FC = () => {
  return (
    <motion.div
      className="w-72 h-72 bg-slate-300 rounded-full"
      animate={{
        scale: [1, 1.4, 1],
        borderRadius: ["50%", "30%", "20%", '50%'],
        rotate: 360

      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }}
    />
  );
};

export default Blob;
