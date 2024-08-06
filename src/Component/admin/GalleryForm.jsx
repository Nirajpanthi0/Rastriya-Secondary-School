import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const GalleryForm = ({ currentGalleryItem, onSubmit, onClose }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (currentGalleryItem) {
      setValue('heading', currentGalleryItem.heading);
      setValue('description', currentGalleryItem.description);
    } else {
      reset();
    }
  }, [currentGalleryItem, setValue, reset]);

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{currentGalleryItem ? 'Update Gallery Item' : 'Add Gallery Item'}</h2>
        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
          <div>
            <label htmlFor="heading" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              id="heading"
              {...register('heading', { required: true })}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              {...register('description', { required: true })}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              id="image"
              {...register('image')}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              {currentGalleryItem ? 'Update' : 'Add'}
            </button>
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GalleryForm;
