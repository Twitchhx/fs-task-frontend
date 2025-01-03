import React from 'react';
import EditBasicInfoForm from '../components/EditBasicInfoForm';
import { useQuery, gql } from '@apollo/client';

const EditBasicInfo = () => {
  const GET_USER_QUERY = gql`
  query GetUser($userId: Int!) {
    user(userId: $userId) {
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
      nationalities {
        country {
          id
          name
        }
        countryId
      }
      maritalStatus {
        id
        name
      }
      dependants
    }
  }
`;

const EditBasicInfo = () => {
  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: { userId: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <EditBasicInfoForm user={data.user} />
    </div>
  );
};
};
export default EditBasicInfo;