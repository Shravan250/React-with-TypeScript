import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Loader: React.FC<Props> = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-4 h-4 bg-teal-500 rounded-full mx-1"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            yoyo: true,
            // repeatDelay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default Loader;
