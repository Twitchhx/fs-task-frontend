import React from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const ProfileHeader = () => {
  return (
    <>
    <div className="flex prof">
      <div className='txt'> 
        <text className="text-3xl">John Smith Profile</text>
        <br/>
      <div className="flex space-x-2 items-center">
        <div className='dash'>
          <text className="text-gray-600"> Dashboard </text>
          <text className="text-cyan-400">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</text>
        </div>
        <div className='hr'>
          <text className="text-gray-601"> HR manage </text>
          <text className="text-cyan-400">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</text>
        </div>
        <div className='emp'>
          <text className="text-gray-602"> Employees </text>
          <text className="text-cyan-400">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</text>
        </div>
        <text className="text-cyan-800"> John Smith Profile </text>
      </div>
      
      </div>
       <div className="flex items-center cont widget" style={{ color: "#004A3F" }}>
        <div style={{width:"48px", height: "40px"}}> <NotificationsOutlinedIcon/></div>
        <div style={{width:"48px", height: "40px"}}> <MailOutlineIcon/></div>
        <div style={{width:"48px", height: "40px"}}> <SettingsOutlinedIcon/></div>
      <img
        src={require("./pic.png")}
        alt="Profile"
        className="rounded-full"
        style={{width:"40px", height: "40px"}}
      />
      </div>
    </div>
    </>
  );
};

export default ProfileHeader;
