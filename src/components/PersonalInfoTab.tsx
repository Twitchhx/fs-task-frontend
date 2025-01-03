import React from 'react';
import {Button} from "@mui/material";
import { useQuery } from '@apollo/client';
import { GET_USER_BASIC_INFO } from '../graphql/queries.ts';

const PersonalInfoTab = () => {

  const { data, loading, error } = useQuery(GET_USER_BASIC_INFO, {
    variables: { userId: 1 },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const user = data.user;
  return (
    <>
    <div className='info'>
      <div className="grid grid-cols-1 gap-4">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded border shadow rounded mb-6" style={{gap:'4px'}}>
          <div className="flex justify-between items-center" >
            <h2 className="text-lg font-semibold text-navy-400">Basic Information</h2>
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button> */}
            <Button className="edit-button" style={{ textTransform: 'none' }} variant="contained">Edit</Button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">National ID Number</p>
              <p className="text-lg font-semibold text-navy-400">{user.nationalId.idNumber}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">National ID Expiring Date</p>
              <p className="text-lg font-semibold text-navy-400">{user.nationalId.expiryDate}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Title</p>
              <p className="text-lg font-semibold text-navy-400">Mr.</p>
            </div>
            <br></br>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">First Name</p>
              <p className="text-lg font-semibold text-navy-400">{user.firstName}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Father Name</p>
              <p className="text-lg font-semibold text-navy-400">{user.fatherName}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">GrandFather Name</p>
              <p className="text-lg font-semibold text-navy-400">{user.grandfatherName}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Family Name</p>
              <p className="text-lg font-semibold text-navy-400">{user.familyName}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">الأسم الأول</p>
              <p className="text-lg font-semibold text-navy-400">{user.localizedName.firstName}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">اسم الأب</p>
              <p className="text-lg font-semibold text-navy-400">{user.localizedName.fatherName}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">اسم الجد</p>
              <p className="text-lg font-semibold text-navy-400">{user.localizedName.grandfatherName}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">اللقب/اسم العائلة</p>
              <p className="text-lg font-semibold text-navy-400">{user.localizedName.familyName}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Date of Birth</p>
              <p className="text-lg font-semibold text-navy-400">01 / 04 / 1980</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Gender</p>
              <p className="text-lg font-semibold text-navy-400">Male</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Nationality</p>
              <p className="text-lg font-semibold text-navy-400">{user.nationalities.country.name}</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Additional Nationality</p>
              <p className="text-lg font-semibold text-navy-400">-</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Passport Number</p>
              <p className="text-lg font-semibold text-navy-400">A135464</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Passport Issue Date</p>
              <p className="text-lg font-semibold text-navy-400">01 / 04 / 1980</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Passport Expiry Date</p>
              <p className="text-lg font-semibold text-navy-400">01 / 04 / 1980</p>
            </div>
            <br/>
            <div>
              <p className="text-sm font-weight-400 text-gray-500">Marital Status</p>
              <p className="text-lg font-semibold text-navy-400">{user.maritalStatus.name}</p>
            </div>
            <div>
              <p className="text-smfont-weight-400 text-gray-500">Dependencies</p>
              <p className="text-lg font-semibold text-navy-400">{user.dependants}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded border shadow rounded mb-4" style={{gap:'4px'}}>
          
          <div className="flex justify-between items-center" >
            <h2 className="text-lg font-semibold text-navy-400 mb-4">Contact Information</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Personal Email</p>
              <p className="text-lg font-semibold text-navy-400">John.smith@gmail.com</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Mobile</p>
              <p className="text-lg font-semibold text-navy-400">011223344556</p>
            </div>
          </div>
      </div>

          <div className="bg-white p-6 rounded border shadow rounded mb-4" style={{gap:'4px'}}>
          
          <div className="flex justify-between items-center" >
            <h2 className="text-lg font-semibold text-navy-400 mb-4">Emergency Contacts</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Emergency Contact Person Name</p>
              <p className="text-lg font-semibold text-navy-400">John John</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Emergency Relation</p>
              <p className="text-lg font-semibold text-navy-400">Father</p>
            </div>

            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Emergency Phone</p>
              <p className="text-lg font-semibold text-navy-400">011224477885</p>
            </div>
          </div>
          </div>

  <div className="bg-white p-6 rounded border shadow rounded mb-4" style={{gap:'4px'}}>
          
          <div className="flex justify-between items-center" >
            <h2 className="text-lg font-semibold text-navy-400 mb-4">Address Details</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Country</p>
              <p className="text-lg font-semibold text-navy-400">Egypt</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">City</p>
              <p className="text-lg font-semibold text-navy-400">Cairo</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Postal Code</p>
              <p className="text-lg font-semibold text-navy-400">11728</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Building</p>
              <p className="text-lg font-semibold text-navy-400">7</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Street</p>
              <p className="text-lg font-semibold text-navy-400">Street 127</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Floor No.</p>
              <p className="text-lg font-semibold text-navy-400">7</p>
            </div>
          </div>
      </div>


          <div className="bg-white p-6 rounded border shadow rounded mb-4" style={{gap:'4px'}}>
          
          <div className="flex justify-between items-center" >
            <h2 className="text-lg font-semibold text-navy-400 mb-4">Driving License Details</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Driving License</p>
              <p className="text-lg font-semibold text-navy-400">Yes</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Driving License Type</p>
              <p className="text-lg font-semibold text-navy-400">C1E</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Driving License expiry date</p>
              <p className="text-lg font-semibold text-navy-400">01 / 04 / 2025</p>
            </div>
          </div>
      </div>


          <div className="bg-white p-6 rounded border shadow rounded mb-4" style={{gap:'4px'}}>
          
          <div className="flex justify-between items-center" >
            <h2 className="text-lg font-semibold text-navy-400 mb-4">Military Status</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Require Travel Permit</p>
              <p className="text-lg font-semibold text-navy-400">Yes</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Military Status</p>
              <p className="text-lg font-semibold text-navy-400">Exempted</p>
            </div>
            <div style={{margin: '4px'}}>
              <p className="text-sm font-weight-400 text-gray-500">Document</p>
              <p className="text-lg font-semibold text-navy-400"></p>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default PersonalInfoTab;
