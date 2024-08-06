import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { createAxiosInstance } from '../../utils/axiosinstance'; // Adjust the import path as needed

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const axiosInstance = createAxiosInstance(""); // Pass the token if needed
        const response = await axiosInstance.get('/gallery');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {images.map((image, index) => (
              <li key={image._id} className="space-y-4">
                <div
                  className="group flex flex-col gap-4 rounded-lg bg-white p-5 shadow-lg cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <div className="relative flex h-72 w-72 mx-auto rounded-xl ring-gray-900/5">
                    <div className="absolute inset-0 z-10 overflow-hidden rounded-xl border border-gray-200">
                      <img
                        src={image.image.url}
                        alt={image.heading}
                        className="block h-full w-full object-cover object-center transform transition duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute bottom-0 z-20 bg-gray-800 w-full p-3 rounded-xl opacity-75">
                      <h1 className="text-lg font-bold text-white">{image.heading}</h1>
                      <h2 className="text-sm font-light text-gray-200">{image.description}</h2>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {modalIsOpen && currentImage && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Preview"
          className="fixed inset-0 flex items-center justify-center"
          overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
          style={{
            content: {
              backgroundColor: 'white',
              padding: '0',
              borderRadius: '8px',
              width: '80%',
              maxWidth: '800px',
              height: '80%',
              maxHeight: '600px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            },
            overlay: {
              zIndex: 1000,
            },
          }}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-700 text-4xl bg-white rounded-full p-2 shadow-lg"
          >
            &times;
          </button>
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-4xl p-2 rounded-full shadow-lg"
              disabled={images.length === 0}
            >
              &lt;
            </button>
            <img
              src={currentImage.image.url}
              alt={currentImage.heading}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-4xl p-2 rounded-full shadow-lg"
              disabled={images.length === 0}
            >
              &gt;
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ImageGallery;
