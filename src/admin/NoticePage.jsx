import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { createAxiosInstance } from '../utils/axiosinstance';
import NoticeForm from '../Component/admin/NoticeForm';
import NoticeCard from '../Component/admin/NoticeCard';
import AdminLayout from './home';

const axiosInstance = createAxiosInstance('');

const NoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentNotice, setCurrentNotice] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axiosInstance.get('/notice');
        const data = response.data;

        // Ensure data is an array
        if (Array.isArray(data)) {
          setNotices(data);
        } else {
          console.error('Unexpected response format:', data);
          setNotices([]);
        }

        setLoading(false);
      } catch (error) {
        setError('Failed to fetch notices');
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const openUpdateModal = (notice) => {
    setCurrentNotice(notice);
    setModalIsOpen(true);
  };

  const handleUpdate = async (data) => {
    if (!currentNotice) return;

    try {
      await axiosInstance.put(`/notice/${currentNotice._id}`, data);

      const response = await axiosInstance.get('/notice');
      const updatedData = response.data;

      if (Array.isArray(updatedData)) {
        setNotices(updatedData);
      }

      setModalIsOpen(false);
      setCurrentNotice(null);
    } catch (error) {
      console.error('Error updating notice:', error);
      setError('Error updating notice');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/notice/${id}`);
      const response = await axiosInstance.get('/notice');
      const updatedData = response.data;

      if (Array.isArray(updatedData)) {
        setNotices(updatedData);
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
      setError('Error deleting notice');
    }
  };

  const handleSubmit = async (data) => {
    if (currentNotice) {
      handleUpdate(data);
    } else {
      try {
        await axiosInstance.post('/notice', data);

        const response = await axiosInstance.get('/notice');
        const updatedData = response.data;

        if (Array.isArray(updatedData)) {
          setNotices(updatedData);
        }

        setModalIsOpen(false);
      } catch (error) {
        console.error('Error adding notice:', error);
        setError('Error adding notice');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <AdminLayout>
      <div className="flex flex-col w-full text-white items-center space-y-4">
        <button onClick={() => setModalIsOpen(true)} className="bg-white text-black">
          Add Notice
        </button>
        <div className="w-full justify-center flex flex-wrap">
          {Array.isArray(notices) && notices.length === 0 ? (
            <div className="text-white text-lg">No notices created</div>
          ) : (
            Array.isArray(notices) && notices.map((notice) => (
              <NoticeCard
                key={notice._id}
                notice={notice}
                onUpdate={openUpdateModal}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        <Modal
          className="z-10 mt-40"
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
            setCurrentNotice(null);
          }}
          contentLabel="Add or Update Notice Modal"
        >
          <NoticeForm
            currentNotice={currentNotice}
            onSubmit={handleSubmit}
            onClose={() => setModalIsOpen(false)}
          />
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default NoticePage;
