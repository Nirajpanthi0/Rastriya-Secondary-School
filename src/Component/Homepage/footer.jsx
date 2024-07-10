import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-black text-lg font-bold py-4 shadow-md">
      <div className="container mx-auto px-4 lg:px-0 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0 w-full lg:w-auto">
          <img src="http://localhost:5173/public/images/logo.png" alt="Logo" className="h-16" />
          <span className="text-sm">&copy; 2024 Your Company. All rights reserved.</span>
        </div>
        <div className="w-full lg:w-auto mb-4 lg:mb-0">
          <h3 className="text-black-400">Links</h3>
          <ul className="space-y-1">
            <li><Link to="/home" className="underline">Home</Link></li>
            <li><Link to="/about" className="underline">About</Link></li>
            <li><Link to="/gallery" className="underline">Gallery</Link></li>
            <li><Link to="/contact" className="underline">Contact</Link></li>
          </ul>
        </div>
        <div className="w-full lg:w-auto mb-4 lg:mb-0">
          <h3 className="text-black-400">Credits</h3>
          <p className="text-sm underline">Developed By NepCod</p>
          <p className="text-sm underline">Niraj Panthi (Frontend Developer)</p>
          <p className="text-sm underline">Prashant Bhusal (Backend Developer)</p>
        </div>
        <div className="w-full lg:w-auto  relative right-">
          <h3 className="text-black-400">Contact us</h3>
          <Link to="/contact" className="bg-black text-white px-4 py-2 rounded inline-block mt-2 lg:mt-0 ">Email</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
