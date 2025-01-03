import React from 'react';
import Sidebar from './components/Sidebar.tsx';
import ProfileHeader from './components/ProfileHeader.tsx';
import PersonalInfoTab from './components/PersonalInfoTab.tsx';
import BasicInfoCard from './components/BasicInfoCard.tsx';

const App = () => {
  return (
    <div className="flex app">
      <Sidebar />

      <div className="flex flex-col w-full">
        <ProfileHeader />
        
        <div style={{marginLeft:"1.5rem"}} className="flex mt-4">
          <BasicInfoCard />
          <PersonalInfoTab />
        </div>
      </div>
    </div>
  );
};


export default App;
