'use client'
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverTextTitle = ({ text, className }: { text: string, className?: string }) => {
    const letters = text.split('');
  
    return (
      <div className="split-text text-center">
        {letters.map((letter, index) => (
          <motion.h2
            key={index}
            whileHover={{ scale: 1.2 }}
            className={cn("text-4xl xs:text-6xl split-char inline-block cursor-default cursor transition-all ease-linear", className)}
            
          >
            {letter}
          </motion.h2>
        ))}
      </div>
    );
  };
  
  export default HoverTextTitle;