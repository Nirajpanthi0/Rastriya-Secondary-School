
import {  FaImages, FaBell, FaUsers, FaChartLine } from "react-icons/fa"; // Importing additional icons
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen  bg-gray-800 text-white w-64">
      <div className="p-4 text-center mt-40 text-xl font-bold">Admin Panel</div>
      <ul className="space-y-4 p-4">
        <li className="flex items-center space-x-2">
          <FaImages />
          <Link to="/admin/gallery">Gallery</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaBell />
          <Link to="/admin/notice">Notice</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaUsers />
          <Link to="/admin/team">Team</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaChartLine />
          <Link to="/admin/result">Result</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
