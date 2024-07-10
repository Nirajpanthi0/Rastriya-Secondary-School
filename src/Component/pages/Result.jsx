
import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
       
        <div className="flex flex-wrap justify-center mt-8 ">
          <Link to="/primarylevel">
            <button className="bg-black  rounded-2xl text-white font-bold py-2 px-4 rounded mx-2 mb-2 md:mx-4 md:mb-0">
              Primary Level
            </button>
          </Link>
          <Link to="/secondarylevel">
            <button className="bg-white border-black  border rounded-2xl text-black font-bold py-2 px-4 rounded mx-2 mb-2 md:mx-4 md:mb-0">
              Secondary Level
            </button>
          </Link>
          <Link to="/higherlevel">
            <button className="bg-black rounded-2xl text-white font-bold py-2 px-4 rounded mx-2 mb-2 md:mx-4 md:mb-0">
              Higher Level
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Result;
