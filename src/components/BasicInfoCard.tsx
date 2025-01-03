import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BASIC_INFO } from '../graphql/queries.ts';
import { useNavigate } from 'react-router-dom';

const BasicInfoCard = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_USER_BASIC_INFO, {
    variables: { userId: 1 },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const user = data.user;

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-semibold mb-2">Info Card</h1>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Family Name:</strong> {user.familyName}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => navigate('/edit')}
      >
        Edit
      </button>
    </div>
  );
};

export default BasicInfoCard;
