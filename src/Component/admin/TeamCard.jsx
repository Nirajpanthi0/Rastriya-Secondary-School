// TeamCard.js
import React from 'react';

const TeamCard = ({ teamMember, onUpdate, onDelete }) => {
  return (
    <div
      key={teamMember._id}
      className="w-80 h-96 bg-gray-800 shadow-md rounded-lg overflow-hidden m-4 flex flex-col"
    >
      {teamMember.image && (
        <img
          src={teamMember.image.url}
          alt={teamMember.name}
          className="w-full h-60 object-cover"
        />
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white">{teamMember.name}</h3>
        <p className="text-gray-400">Experience: {teamMember.experience} years</p>
        <p className="mt-2">{teamMember.title}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => onUpdate(teamMember)}
            className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-100"
          >
            Update
          </button>
          <button
            onClick={() => onDelete(teamMember._id)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
