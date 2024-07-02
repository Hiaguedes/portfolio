"use client";
import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

const blobVariants: Variants = {
  animate: {
    d: [
      "M50,30 Q65,35 70,50 Q65,65 50,70 Q35,65 30,50 Q35,35 50,30",
      "M50,30 Q60,40 70,50 Q60,60 50,70 Q40,60 30,50 Q40,40 50,30",
      "M50,30 Q70,45 50,70 Q30,45 50,30",
      "M50,30 Q65,35 70,50 Q65,65 50,70 Q35,65 30,50 Q35,35 50,30",
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Blob: FC<PropsWithChildren & HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={className}>
        <motion.div
            style={{
                width: 250,
                height: 250,
                borderRadius: 30,
                backgroundColor: "currentColor",
            }}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        />
    </div>
  );
};

export default Blob;
