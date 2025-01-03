import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { UPDATE_USER_MUTATION } from '../graphql/mutations.ts';



const EditBasicInfoForm = ({ user }: { user: any }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: user,
  });

  const [updateUser] = useMutation(UPDATE_USER_MUTATION);

  const onSubmit = async (data: any) => {
    try {
      const result = await updateUser({
        variables: {
          userId: 1,
          updateInput: data,
        },
      });
      console.log('Updated Data:', result.data.updateUser);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-white shadow-md rounded-md"
    >
      <h1 className="text-xl font-semibold mb-4">Edit Basic Information</h1>
      <div className="mb-2">
        <label>First Name</label>
        <input
          {...register('firstName')}
          className="block w-full px-2 py-1 border rounded"
        />
      </div>
      <div className="mb-2">
        <label>Father Name</label>
        <input
          {...register('fatherName')}
          className="block w-full px-2 py-1 border rounded"
        />
      </div>
      <div className="mb-2">
        <label>Grandfather Name</label>
        <input
          {...register('grandfatherName')}
          className="block w-full px-2 py-1 border rounded"
        />
      </div>
      <div className="mb-2">
        <label>Family Name</label>
        <input
          {...register('familyName')}
          className="block w-full px-2 py-1 border rounded"
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save
      </button>
    </form>
  );
};

export default EditBasicInfoForm;
