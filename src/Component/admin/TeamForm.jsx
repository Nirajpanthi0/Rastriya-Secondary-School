// TeamForm.js
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const TeamForm = ({ currentTeamMember, onSubmit, onClose }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (currentTeamMember) {
      setValue('name', currentTeamMember.name);
      setValue('experience', currentTeamMember.experience);
      setValue('title', currentTeamMember.title);
    } else {
      reset();
    }
  }, [currentTeamMember, setValue, reset]);

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {currentTeamMember ? 'Update Team Member' : 'Add Team Member'}
        </h2>
        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              {...register('name', { required: true })}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Experience
            </label>
            <input
              id="experience"
              type="number"
              {...register('experience', { required: true })}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="title"
              {...register('title', { required: true })}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              id="image"
              {...register('image')}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {currentTeamMember ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;
