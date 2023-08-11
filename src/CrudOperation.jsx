import { profilesUrl} from "./Config";

//posting profile data to mockapi
export const createprofile=async(profileData) => {
    const response = await fetch (`${profilesUrl}/profiles`,
    {
       method: "POST",
       headers:{'content-type': 'application/json'},
       body: JSON.stringify(profileData)
    });
  const profile = await response.json();
  return profile;
}



//gettgin profile data from mockapi which we posted to mock

export const getProfiles =async() => {
    const response = await fetch (`${profilesUrl}/profiles`);
    const profile = await response.json();
    return profile;
}


//getting individual profile data 
export const getProfile = async (profileId) => {
     const response = await fetch (`${profilesUrl}/profiles/${profileId}`);
    const profile= await response.json();
    return profile;
    }


    //delete a profile

    export const deleteProfile = async (profileId) => {
        const response=await fetch(`${profilesUrl}/profiles/${profileId}`,
        {
          method: 'DELETE'
    })
        
        const profile = await response.json();
        return profile;
    }


    //update a profile
    export const updateProfile = async (profileId, profileData)=>{
      const response = await fetch(`${profilesUrl}/profiles/${profileId}`,
      {
        method: 'PUT',
        body: JSON.stringify(profileData),
        headers:{"Content-Type": "application/json"},
      }
      );
      const profile = await response.json();
      return profile;
    }