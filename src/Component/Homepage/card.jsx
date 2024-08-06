import React from 'react';
import { PiStudent } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Box() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once when component comes into view
    threshold: 0.5, // Trigger animation when 50% of component is visible
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-wrap py-8 justify-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="mx-4 my-4 sm:my-8 bg-white p-4 flex flex-col justify-center items-center rounded-md shadow-md"
        style={{ width: "240px", height: "160px", marginTop: "85px" }}
      >
        <h2 className="text-md  font-semibold text-center text-slate-800">Get in Touch</h2>
        <div className="flex mt-4">
          <a
            href="https://facebook.com/example"
            className="text-blue-600 mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://youtube.com/example"
            className="text-red-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="mx-4 my-4 sm:my-8 bg-white p-4 flex flex-col justify-center items-center rounded-md shadow-md"
        style={{ width: "240px", height: "160px", marginTop: "85px" }}
      >
        <PiStudent className="text-3xl" />
        <p className="text-base text-center text-gray-700 mt-2">2300 + Students</p>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="mx-4 my-4 sm:my-8 bg-white p-4 flex flex-col justify-center items-center rounded-md shadow-md"
        style={{ width: "240px", height: "160px", marginTop: "85px" }}
      >
        <LiaChalkboardTeacherSolid className="text-3xl" />
        <p className="text-base text-center text-gray-700 mt-2">80 + well qualified teachers</p>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="mx-4 my-4 sm:my-8 bg-white p-4 flex flex-col justify-center items-center rounded-md shadow-md"
        style={{ width: "240px", height: "160px", marginTop: "85px" }}
      >
        <IoBookSharp className="text-3xl" />
        <p className="text-base text-center text-gray-700 mt-2">Free Education in Nepali and English medium up to 10 class</p>
      </motion.div>
    </div>
  );
}

export default Box;
