import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Notice = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='min-h-screen w-screen justify-center items-center bg-slate-100 flex flex-col'>
      <div className="max-w-2xl mx-auto relative top-20 flex-1">
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow rounded-2xl border-slate-300 border relative top-20">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12h2V7H9v5zm0 4h2v-2H9v2z"/>
                  <path fillRule="evenodd" d="M18 8a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a6 6 0 100 12A6 6 0 0010 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="ml-3 w-full">
                <h2 className="text-lg leading-6 font-medium text-red-500 animate-bounce">SEE 2080 Result Publish</h2>
                <p className="mt-2 text-sm text-gray-500">
                  This is a short description of the notice. It provides important information that users need to know.
                </p>
                {showMore ? (
                  <p className="text-sm text-gray-500">
                    Additional details or content when expanded. You can add more information here.
                  </p>
                ) : null}
                <Link to={"/noticedital"}>
                  <button onClick={toggleShowMore} className="text-blue-500 mt-2 underline hover:no-underline focus:outline-none">
                    {showMore ? 'Read less' : 'Read more'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
