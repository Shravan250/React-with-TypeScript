import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  // Define your props here
}

const Varients: React.FC<Props> = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex w-full h-screen items-center justify-center bg-black">
      <motion.div
        className="w-[200px] h-[200px] rounded-full bg-yellow-200"
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.5 },
        }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        exit="exit"
        transition={{ duration: 0.5 }}
        onClick={() => setIsVisible(!isVisible)}
      />
    </div>
  );
};

export default Varients;

// https://medium.com/@shravan.bobade.tech/navigating-the-challenges-of-freelancing-as-a-full-stack-developer-7446a895e2cc
