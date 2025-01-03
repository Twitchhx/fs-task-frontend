import { gql } from '@apollo/client';


export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($userId: Int!, $updateInput: UpdateUserInput!) {
    updateUser(userId: $userId, updateInput: $updateInput) {
      firstName
      fatherName
      grandfatherName
      familyName
    }
  }
`;