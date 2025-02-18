import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <>
      <nav className="bg-slate-50 p-4 fixed w-full z-50 top-0 shadow-md">
        <div className="container mx-auto flex justify-around items-center">
          <div className="text-black text-lg font-bold">
            <Link to="/home" className="flex justify-center items-center gap-5">
              <img className="w-10 h-10" src={logo} alt="logo" />
              <span className="opacity-80">Rastiya Secondary School</span>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-black">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`w-full lg:flex font-semibold lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="text-gray-900 lg:flex lg:space-x-6">
            <li>
                <Link to="/home" className="block py-2 px-4 lg:py-0 hover:text-gray-600">Home</Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 px-4 lg:py-0 hover:text-gray-600">About</Link>
              </li>
              <li>
                <Link to="/notice" className="block py-2 px-4 lg:py-0 hover:text-gray-600">Notice</Link>
              </li>
              <li>
                <Link to="/result" className="block py-2 px-4 lg:py-0 hover:text-gray-600">Result</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-4 lg:py-0 hover:text-gray-600">Contact</Link>
              </li>
              <li>
                <Link to="/gallery" className="block py-2 px-4 lg:py-0 hover:text-gray-600">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setIsSidebarOpen(false)}>
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-30 p-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsSidebarOpen(false)} className="text-black mb-4 ">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ul className="text-gray-900 space-y-4">
              <li>
                <Link to="/about" className="block py-2 px-4 hover:text-gray-600" onClick={() => setIsSidebarOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/notice" className="block py-2 px-4 hover:text-gray-600" onClick={() => setIsSidebarOpen(false)}>Notice</Link>
              </li>
              <li>
                <Link to="/result" className="block py-2 px-4 hover:text-gray-600" onClick={() => setIsSidebarOpen(false)}>Result</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-4 hover:text-gray-600" onClick={() => setIsSidebarOpen(false)}>Contact</Link>
              </li>
              <li>
                <Link to="/gallery" className="block py-2 px-4 hover:text-gray-600" onClick={() => setIsSidebarOpen(false)}>Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
