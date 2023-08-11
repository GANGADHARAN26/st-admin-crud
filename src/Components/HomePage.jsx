import { Link } from "react-router-dom";
import { deleteProfile, getProfiles } from "../CrudOperation";
import { useState, useEffect } from "react";
import "./Home.css";
function HomePage() {
  //loading profiles
  const [profiles, setProfiles] = useState([]);
  const loadProfiles = async () => {
    const response = await getProfiles();
    setProfiles(response);
  };
  //delete profiles
  const removeProfiles = async (profileId) => {
    // eslint-disable-next-line no-unused-vars
    const response = await deleteProfile(profileId);

    const newProfiles = profiles.filter(({ id }) => profileId !== id);
    setProfiles(newProfiles);
  };

  useEffect(() => {
    loadProfiles();
  }, []);
  return (
    <div className="container">
      {/* heading */}
      <div className="stdprofiles bg-dark">
        <div>
          <h1>student profiles</h1>
        </div>
      </div>
        {/* student dat */}
        <div className="row" id="mainrow">
        {profiles.map((e) => (
          <div key={e.id} className="col-4">
            <div className="card mb-5 mb-lg-0" id="stdcard" style={{width: "auto",height:"auto"}}> 
            <Link
              to={`/profiles/${e.id}`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              
                <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" id="image"/>

              <div className="card-body">
                <p>NAME        :&nbsp;&nbsp;&nbsp;{e.name}</p>
                <hr/>
                <p>ROLL NUMBER :&nbsp;&nbsp;{e.rollno}</p>
                <hr/>
                <p>CLASS       :&nbsp;&nbsp;&nbsp;{e.class} Standard</p>
                <hr/>
                <p>SECTION     :&nbsp;&nbsp;&nbsp;{e.section}</p>
                <hr/>
                <p>BLOOD GROUP :&nbsp;&nbsp;&nbsp;{e.bloodgroup}</p>
                <hr/>
                <p>DOB         :&nbsp;&nbsp;&nbsp;{e.dob}</p>
              </div>
            </Link>
            <button
            className="btn btn-outline-danger" 
            id="del"
              onClick={() => {
                removeProfiles(e.id);
              }}
            >
              delete
            </button> 
            <Link to={`/profiles/edit?id=${e.id}`} id="ln">
            <button className="btn btn-dark" id="edt" type="button">Edit </button>
            </Link>
           
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}

export default HomePage;
