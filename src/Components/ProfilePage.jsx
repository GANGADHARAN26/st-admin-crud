import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../CrudOperation";
//the components containes individual profiles details 
function ProfilePage() {
  const {profileId}=useParams();
  const [profileData,setData] =useState({
    name:'',
    rollno:'',
    class:'',
    section:'',
    bloodgroup:"",
    dob:"",
  });
  const loadProfile=async() =>{
    const response = await  getProfile(profileId)
     setData(response)
  }

  useEffect(()=>{
    loadProfile()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="profile">
      <div className="card">
      <p>name {profileData.name}</p>
              <p>rool no{profileData.rollno}</p>
              <p>class {profileData.class}</p>
              <p>section{profileData.section}</p>
              <p>Blood Group {profileData.bloodgroup}</p>
              <p>DOB {profileData.dob}</p>
      </div>
    </div>
  )
}

export default ProfilePage