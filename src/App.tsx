import React from 'react';
import Sidebar from './components/Sidebar.tsx';
import ProfileHeader from './components/ProfileHeader.tsx';
import PersonalInfoTab from './components/PersonalInfoTab.tsx';
// import BasicInfoCard from './components/BasicInfoCard.tsx';

const App = () => {
  return (
    <div className="flex app">
     
      <Sidebar />

      
      <div className="flex-1 p-6">
        <ProfileHeader />
        <div className="mt-4">
          <PersonalInfoTab />
        </div>
      </div>
    </div>
  );
};

export default App;
