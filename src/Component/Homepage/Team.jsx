import React, { useState } from "react";

const   Team = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    
    <div className="py-12 px-4 sm:px-6 lg:px-8">
       <h1 className="text-3xl font-bold mb-4 text-center">Team</h1>
      <div className="max-w-7xl mx-auto bg-white w-10/12 flex justify-center items-center rounded-[30px]">
        <div className="w-full flex flex-col items-center py-6 px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="col-span-2 lg:col-span-1">
              <ImageBox
                size="large"
                names={["Principal", "Prashant Bhushal"]}
                imageUrl="https://www.realtechnirman.com/wp-content/uploads/2017/02/man-dummy.jpg"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <ImageBox
                size="large"
                names={["Vice Principal", "Niraj Panthi"]}
                imageUrl="https://www.realtechnirman.com/wp-content/uploads/2017/02/man-dummy.jpg"
              />
            </div>
            {showMore && (
              <>
                <ImageBox size="small" names={["Teacher", "Krishna Dev Khanal"]} imageUrl="https://www.realtechnirman.com/wp-content/uploads/2017/02/man-dummy.jpg" />
                <ImageBox size="small" names={["Teacher", "Ram Dev Khanal"]} imageUrl="https://www.realtechnirman.com/wp-content/uploads/2017/02/man-dummy.jpg" />
                <ImageBox size="small" names={["Teacher", "Hari Ram"]} imageUrl="https://www.realtechnirman.com/wp-content/uploads/2017/02/man-dummy.jpg" />
              </>
            )}
          </div>
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
    <div className="rounded-lg overflow-hidden shadow-lg w-full mb-4">
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
    </div>
  );
};

export default Team;
