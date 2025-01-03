import React from 'react';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
const Sidebar = () => {
  return (
    <nav className="w-20 h-sidebar bg-white text-white flex flex-col items-center sidebar">
      <div className='mb-6'>
          <img src={require("./logo.png")} alt = "p" className="w-10 h-10"/>
        </div>
      <nav className="w-inner h-inner bg-white text-white flex flex-col items-center">
        <div className="dashboard icon-blue">
          <WidgetsIcon className="material-icons-two-tone" />
        </div>
        <div className="widget icon-grey">
          <AccessTimeIcon/>
        </div>
        <div className="widget icon-grey">
          <DescriptionOutlinedIcon />
        </div>
        <div className="widget icon-grey">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="widget icon-grey">
          <InboxOutlinedIcon />
        </div>
        
      </nav>
    </nav>
  );
};

export default Sidebar;