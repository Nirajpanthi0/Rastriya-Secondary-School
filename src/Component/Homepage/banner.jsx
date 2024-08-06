import React from "react";
import { motion } from "framer-motion";
import banner from "../../../public/images/banner.png";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-full bg-cover bg-center relative top-12"
    >
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="text-center text-white p-4 md:p-0">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Rastriya Secondary School
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-xl md:text-2xl"
          >
            Your success starts here
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
