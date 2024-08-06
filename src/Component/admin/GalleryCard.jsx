import React from 'react';

const GalleryCard = ({ galleryItem, onUpdate, onDelete }) => {
  return (
    <div
      key={galleryItem._id}
      className="w-80 h-96 bg-gray-800 shadow-md rounded-lg overflow-hidden m-4 flex flex-col"
    >
      {galleryItem.image && (
        <img
          src={galleryItem.image.url}
          alt={galleryItem.heading}
          className="w-full h-60 object-cover"
        />
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white">{galleryItem.heading}</h3>
        <p className="text-gray-400 flex-grow">{galleryItem.description}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => onUpdate(galleryItem)}
            className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-100"
          >
            Update
          </button>
          <button
            onClick={() => onDelete(galleryItem._id)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
