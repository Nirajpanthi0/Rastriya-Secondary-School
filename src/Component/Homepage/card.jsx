import React from 'react';
import { PiStudent } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaFacebook, FaYoutube } from 'react-icons/fa'; 
function Box() {
    return (
        <div className="flex flex-wrap py-8 justify-center">
        <div className="mx-4 my-4 sm:my-8 bg-white p-4 flex flex-col justify-center items-center rounded-md shadow-md" style={{ width: "240px", height: "160px", marginTop: "85px" }}>
          <h2 className="text-xl font-bold text-center text-black">Get in Touch</h2>
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
        </div>
        <div className="mx-4 my-4 sm:my-8 bg-white p-4 flex flex-col justify-center items-center rounded-md shadow-md" style={{ width: "240px", height: "160px", marginTop: "85px" }}>
          <PiStudent className="text-3xl" />
          <p className="text-base text-center text-gray-700 mt-2">2300 + Students</p>
        </div>
        <div className="mx-4 my-4 sm:my-8 bg-white p-4 flex flex-col justify-center items-center rounded-md shadow-md" style={{ width: "240px", height: "160px", marginTop: "85px" }}>
          <LiaChalkboardTeacherSolid className="text-3xl" />
          <p className="text-base text-center text-gray-700 mt-2">80 + well qualified teachers</p>
        </div>
        <div className="mx-4 my-4 sm:my-8 bg-white p-4 flex flex-col justify-center items-center rounded-md shadow-md" style={{ width: "240px", height: "160px", marginTop: "85px" }}>
          <IoBookSharp className="text-3xl" />
          <p className="text-base text-center text-gray-700 mt-2">Free Education in Nepali and English medium up to 10 class</p>
        </div>
      </div>
      
    );
}

export default Box;
