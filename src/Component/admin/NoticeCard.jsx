const NoticeCard = ({ notice, onUpdate, onDelete }) => {
    return (
      <div className="p-4 bg-gray-700 text-white rounded m-2">
        <h3 className="text-lg font-semibold">{notice.title}</h3>
        <p className="mt-2">{notice.description}</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => onUpdate(notice)}
            className="bg-blue-600 px-4 py-2 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(notice._id)}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default NoticeCard;
  