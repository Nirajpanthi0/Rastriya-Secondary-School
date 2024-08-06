import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createAxiosInstance } from '../../utils/axiosinstance'; // Adjust the import path as needed

const Team = () => {
  const [team, setTeam] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once when component comes into view
    threshold: 0.5, // Trigger animation when 50% of component is visible
  });

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const axiosInstance = createAxiosInstance(""); // Pass the token if needed
        const response = await axiosInstance.get('/team');
        setTeam(response.data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeam();
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className="max-w-7xl mx-auto bg-white w-10/12 flex justify-center items-center rounded-[30px]"
      >
        <div className="w-full flex flex-col items-center py-6 px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-4"
          >
            {team.slice(0, showMore ? team.length : 6).map((member) => (
              <div key={member._id}>
                <ImageBox
                  size={member.size} // Assume `size` is a property in the data
                  names={[member.title, member.name]}
                  imageUrl={member.image.url}
                />
              </div>
            ))}
          </motion.div>
          <button
            className="mt-4 px-4 py-2 bg-white text-black border border-black rounded"
            onClick={handleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

const ImageBox = ({ names, imageUrl, size }) => {
  const imageSizeClass = size === "large" ? "w-32 h-32" : "w-24 h-24";

  return (
    <motion.div
      className="rounded-lg overflow-hidden shadow-lg w-full mb-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img
        src={imageUrl}
        alt={names[0]}
        className={`object-cover ${imageSizeClass} mx-auto`}
      />
      <div className="p-2 text-center font-semibold">
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;
