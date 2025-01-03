import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BASIC_INFO } from '../graphql/queries.ts';

const BasicInfoCard = () => {
  const { data, loading, error } = useQuery(GET_USER_BASIC_INFO, {
    variables: { userId: 1 },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const user = data.user;

  return (
    <div className="bg-white shadow-md section">
      <div className="inner-section1">
      <img
        src={require("./pic2.png")}
        alt="info"
        style={{maxWidth:"120px", height: "120px", paddingBottom:"10px"}}
      />
        <div className="inner-name">
          <h1  style={{color:"#051D49", fontSize:"20px", fontWeight:"600", lineHeight:"30px", paddingBottom:"10px" }} className="font-semibold">{user.firstName} {user.familyName} </h1>
          <h2  style={{color:"#737791", fontSize:"16px", fontWeight:"400", lineHeight:"20px" }}>Senior Product Manager </h2>
        </div>
      </div>
      <hr />
      <div style={{paddingTop:"30px"}}className="inner-section2">
        <div style={{width:"345px", height:"59px", borderRadius:"8px", padding:"16px", backgroundColor:"#F4F8FE"}}>
          <h1 style={{width:"313px", height:"27px", fontWeight:"500", fontSize:"18px", lineHeight:"27px", color:"#0F6CBD"}}>Personal Information</h1>
        </div>
        <div style={{width:"345px", height:"59px", borderRadius:"8px", paddingRight:"16px", paddingLeft:"16px", paddingTop:"21px", paddingBottom:"16px"}}>
          <h1 style={{width:"313px", height:"27px", fontWeight:"400", fontSize:"18px", lineHeight:"27px", color:"#051D49"}}>Financial Information</h1>
        </div>
      </div>

    </div>
  );
};

export default BasicInfoCard;
