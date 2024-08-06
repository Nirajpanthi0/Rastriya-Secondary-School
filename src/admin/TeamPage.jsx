import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { createAxiosInstance } from '../utils/axiosinstance';
import TeamForm from '../Component/admin/TeamForm';
import TeamCard from '../Component/admin/TeamCard';
import AdminLayout from './home';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTeamMember, setCurrentTeamMember] = useState(null);
  
  // Create axiosInstance
  const axiosInstance = createAxiosInstance(""); // Pass the token if needed

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axiosInstance.get('/team');
        const data = response.data;

        // Ensure data is an array
        if (Array.isArray(data)) {
          setTeamMembers(data);
        } else {
          console.error('Unexpected response format:', data);
          setTeamMembers([]);
        }

        setLoading(false);
      } catch (error) {
        setError('Failed to fetch team members');
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const openUpdateModal = (teamMember) => {
    setCurrentTeamMember(teamMember);
    setModalIsOpen(true);
  };

  const handleUpdate = async (data) => {
    if (!currentTeamMember) return;

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('experience', data.experience);
      formData.append('title', data.title);
      if (data.image && data.image[0]) {
        formData.append('image', data.image[0]);
      }

      await axiosInstance.put(`/team/${currentTeamMember._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const response = await axiosInstance.get('/team');
      const updatedData = response.data;

      if (Array.isArray(updatedData)) {
        setTeamMembers(updatedData);
      }

      setModalIsOpen(false);
      setCurrentTeamMember(null);
    } catch (error) {
      console.error('Error updating team member:', error);
      setError('Error updating team member');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/team/${id}`);
      const response = await axiosInstance.get('/team');
      const updatedData = response.data;

      if (Array.isArray(updatedData)) {
        setTeamMembers(updatedData);
      }
    } catch (error) {
      console.error('Error deleting team member:', error);
      setError('Error deleting team member');
    }
  };

  const handleSubmit = async (data) => {
    if (currentTeamMember) {
      handleUpdate(data);
    } else {
      try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('experience', data.experience);
        formData.append('title', data.title);
        if (data.image && data.image[0]) {
          formData.append('image', data.image[0]);
        }

        await axiosInstance.post('/team', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const response = await axiosInstance.get('/team');
        const updatedData = response.data;

        if (Array.isArray(updatedData)) {
          setTeamMembers(updatedData);
        }

        setModalIsOpen(false);
      } catch (error) {
        console.error('Error adding team member:', error);
        setError('Error adding team member');
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
          Add Team Member
        </button>
        <div className="w-full justify-center flex flex-wrap">
          {Array.isArray(teamMembers) && teamMembers.length === 0 ? (
            <div className="text-white text-lg">No team members created</div>
          ) : (
            Array.isArray(teamMembers) && teamMembers.map((teamMember) => (
              <TeamCard
                key={teamMember._id}
                teamMember={teamMember}
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
            setCurrentTeamMember(null);
          }}
          contentLabel="Add or Update Team Member Modal"
        >
          <TeamForm
            currentTeamMember={currentTeamMember}
            onSubmit={handleSubmit}
            onClose={() => setModalIsOpen(false)}
          />
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default TeamPage;
