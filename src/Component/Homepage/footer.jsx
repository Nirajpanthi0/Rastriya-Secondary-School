import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-800 text-lg py-8 shadow-md">
      <div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-around items-center">
        <div className="flex items-center space-x-4 mb-8 lg:mb-0 w-full lg:w-auto">
          <img src="http://localhost:5173/public/images/logo.png" alt="Logo" className="h-16" />
          <span className="text-lg font-bold">Rastiya Secondary School</span>
        </div>
        <div className="w-full lg:w-auto mb-8 lg:mb-0">
          <h3 className="text-gray-600 text-md font-semibold">Links</h3>
          <ul className="mt-4 flex flex-col gap-y-2 text-sm">
            <li><Link to="/home" className="hover:text-gray-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
            <li><Link to="/gallery" className="hover:text-gray-500">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
          </ul>
        </div>
        <div className="w-full lg:w-auto mb-8 lg:mb-0">
          <h3 className="text-gray-600 text-md font-semibold">Credits</h3>
          <p className="mt-4 text-sm">CodeGorkha</p>
          {/* <p className="text-sm">Niraj Panthi (Frontend Developer)</p>
          <p className="text-sm">Prashant Bhusal (Backend Developer)</p> */}
        </div>
        <div className="w-full lg:w-auto flex flex-col items-start">
          <h3 className="text-gray-600 text-md font-semibold">Contact us</h3>
          <Link to="/contact" className="mt-4 bg-white text-black border border-black px-4 py-3 text-sm text-center rounded-xl">Email</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
