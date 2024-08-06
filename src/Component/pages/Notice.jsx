import { useState, useEffect } from 'react';
import { createAxiosInstance } from '../../utils/axiosinstance'; // Adjust the import path as needed

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const axiosInstance = createAxiosInstance(""); // Pass the token if needed
        const response = await axiosInstance.get('/notice'); // Fetch the notice data
        setNotices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notices:', error);
        setError('Failed to fetch notices');
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='min-h-screen w-screen justify-center items-center bg-slate-100 flex flex-col'>
      <div className="max-w-2xl min-w-[30vw] mx-auto relative top-20 flex-1">
        <div className="space-y-4">
          {notices.length > 0 ? (
            notices.map((notice) => (
              <div key={notice._id} className="p-4 bg-white shadow rounded-2xl border-slate-300 border relative top-20">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-back" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12h2V7H9v5zm0 4h2v-2H9v2z"/>
                      <path fillRule="evenodd" d="M18 8a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a6 6 0 100 12A6 6 0 0010 2z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="ml-3 w-full">
                    <h2 className="text-lg leading-6 font-medium text-black animate-bounce">
                      {notice.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-800">
                      {notice.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No notices available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notice;
