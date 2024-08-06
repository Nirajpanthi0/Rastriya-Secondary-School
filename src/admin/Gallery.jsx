import  { useEffect, useState } from 'react';
import AdminLayout from './home';
import Modal from 'react-modal';
import GalleryForm from '../Component/admin/GalleryForm';
import GalleryCard from '../Component/admin/GalleryCard';
import { createAxiosInstance } from '../utils/axiosinstance';
// import { useAuthStore } from '../store/useAuthStore';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentGalleryItem, setCurrentGalleryItem] = useState(null);
//   const { token } = useAuthStore();
  const AxiosIns = createAxiosInstance( "");

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await AxiosIns.get('/gallery');
        setGalleryItems(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch gallery items');
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  const openUpdateModal = (galleryItem) => {
    setCurrentGalleryItem(galleryItem);
    setModalIsOpen(true);
  };

  const handleUpdate = async (data) => {
    if (!currentGalleryItem) return;

    try {
      const formData = new FormData();
      formData.append('heading', data.heading);
      formData.append('description', data.description);
      if (data.image && data.image[0]) {
        formData.append('image', data.image[0]);
      }

      await AxiosIns.put(`/gallery/${currentGalleryItem._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const response = await AxiosIns.get('/gallery');
      setGalleryItems(response.data);
      setModalIsOpen(false);
      setCurrentGalleryItem(null);
    } catch (error) {
      console.error('Error updating gallery item:', error);
      setError('Error updating gallery item');
    }
  };

  const handleDelete = async (id) => {
    try {
      await AxiosIns.delete(`/gallery/${id}`);
      const response = await AxiosIns.get('/gallery');
      setGalleryItems(response.data);
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      setError('Error deleting gallery item');
    }
  };

  const handleSubmit = async (data) => {
    if (currentGalleryItem) {
      handleUpdate(data);
    } else {
      try {
        const formData = new FormData();
        formData.append('heading', data.heading);
        formData.append('description', data.description);
        if (data.image && data.image[0]) {
          formData.append('image', data.image[0]);
        }

        await AxiosIns.post('/gallery', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const response = await AxiosIns.get('/gallery');
        setGalleryItems(response.data);
        setModalIsOpen(false);
      } catch (error) {
        console.error('Error adding gallery item:', error);
        setError('Error adding gallery item');
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
      <div className="flex flex-col w-full  text-white items-center space-y-4">
        <button onClick={() => setModalIsOpen(true)} className="bg-white text-black">
          Add Gallery Item
        </button>
        <div className="w-full justify-center flex flex-wrap">
          {galleryItems.map((galleryItem) => (
            <GalleryCard
              key={galleryItem._id}
              galleryItem={galleryItem}
              onUpdate={openUpdateModal}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      <Modal
        className="z-10 mt-40"
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
          setCurrentGalleryItem(null);
        }}
        contentLabel="Add or Update Gallery Item Modal"
      >
        <GalleryForm
          currentGalleryItem={currentGalleryItem}
          onSubmit={handleSubmit}
          onClose={() => setModalIsOpen(false)}
        />
      </Modal>
    </AdminLayout>

  );
};

export default Gallery;
