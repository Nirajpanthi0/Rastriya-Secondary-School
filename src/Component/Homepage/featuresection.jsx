import React from "react";

const FeatureSection = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-8 sm:gap-x-10 mx-2 sm:mx-auto max-w-5xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-1">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Special Features</div>
          <p className="text-gray-700 text-base">
            Besides employing highly qualified, experienced teachers and equally
            efficient non-teaching staff, Rastriya Secondary School has
            developed the following physical and organizational infrastructures
            for effective academic operation: Well-furnished, spacious
            classrooms, Well-managed resourceful E-library, Well-equipped
            laboratories for science disciplines, Impressive conference hall,
            and more.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-1 mt-8 sm:mt-0">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Belief</div>
          <p className="text-gray-700 text-base">
            Quality education is such that it contributes not only to acquiring
            certificates but also to producing efficient human power. Private
            educational institutes charge high fees which are not affordable for
            students from low economic backgrounds. Rastriya Secondary School
            believes that education must be provided at nominal fees so that no
            one would be deprived of their fundamental right to acquire
            education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
