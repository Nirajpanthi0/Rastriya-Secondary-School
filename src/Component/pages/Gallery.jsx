import React from 'react';
import logo from '../../../public/images/logo.png';

const ImageGallery = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full lg:mx-0">
        
          </div>
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <div className="m-2 space-y-2">
                <div className="group flex flex-col gap-1 rounded-lg p-5 text-gray" tabIndex="1">
                  <div className="group relative flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                      <img
                        src={logo}
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt="Logo"
                      />
                    </div>
                    <div className="bg-gray-500 w-70% p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
                      <h1 className="text-lg font-bold text-white">Placeholder Title</h1>
                      <h2 className="text-sm font-light text-gray-200">Placeholder Subtitle</h2>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* Add more li elements for additional images */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
