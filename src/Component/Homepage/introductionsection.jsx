import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IntroductionSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5, 
  });

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto rounded-2xl bg-white w-10/12 flex justify-center items-center"
      >
        <div className="text-center px-3">
          <h2 className="text-3xl font-extrabold py-4 text-gray-900 sm:text-4xl">
            Introduction Of School
          </h2>
          <p className="mt-4 text-lg text-start px-4 text-gray-600">
            Rastriya Secondary School is an institution with a rich heritage and
            distinguished faculty members. Since its establishment, it has been
            committed to providing quality education to students of diverse
            economic backgrounds. The school offers free education up to class
            10 and affordable fees for 10+2, gaining recognition nationwide. It
            strives to empower students to shape their future independently,
            combining academic rigor with personal support. Rastriya Secondary
            School is dedicated to developing skilled human resources to meet
            21st-century educational challenges across various sectors.
            {isExpanded && (
              <>
                <br />
                <span>
                  The school provides a conducive learning environment with modern
                  facilities and an innovative curriculum that fosters critical
                  thinking and practical application of knowledge. It emphasizes
                  holistic education, promoting academic excellence,
                  extracurricular activities, moral values, and social
                  responsibility. Our faculty members are highly qualified,
                  dedicated to nurturing each student's potential and guiding them
                  towards personal and professional success. We aim to cultivate a
                  community of lifelong learners prepared to contribute positively
                  to society. The school continuously updates its teaching methods
                  and infrastructure to ensure our students receive the best
                  education possible.
                </span>
              </>
            )}
          </p>
          <button
            onClick={handleToggle}
            className="my-4 text-black underline  underline-offset-8 rounded-2xl px-4 py-2"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroductionSection;
