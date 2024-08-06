import { useEffect, useState } from 'react';

const NoticeForm = ({ currentNotice, onSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentNotice) {
      setTitle(currentNotice.title);
      setDescription(currentNotice.description);
    }
  }, [currentNotice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 text-black">
      <h2 className="text-xl mb-4">{currentNotice ? 'Update Notice' : 'Add Notice'}</h2>
      <div className="mb-4">
        <label className="block text-sm mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="flex justify-end">
        <button type="button" onClick={onClose} className="bg-gray-600 px-4 py-2 rounded mr-2">
          Cancel
        </button>
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded">
          {currentNotice ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
};

export default NoticeForm;
