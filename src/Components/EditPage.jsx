import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { getProfile, updateProfile } from "../CrudOperation";
import "./Edit.css"

function EditPage() {
  const initialProfile ={
    name:'',
    rollno:'',
    class:'',
    section:'',
    bloodgroup:"",
    dob:"",
  }
  const [params]=useSearchParams();
 const [formData,setFormData] =useState(initialProfile);
  const loadProfile=async() =>{
    const response = await getProfile(params.get('id'))
    setFormData(response);
  }
 const handleChange=(e) =>{
  const{name,value}=e.target;
  setFormData((preData)=>({
    ...preData,
    [name]:value,
  }
  ))};
  const handleSubmit=(e)=>{
      e.preventDefault();
      updateProfile(params.get('id'),formData)
      setFormData(initialProfile)
  }
  useEffect(()=>{
  loadProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="container" id="cont">
    <form className="card" id="editcard">
      <div className="card-title">
           <h3>EDIT {formData.name} DETAILS</h3>
      </div>
      <div className="mod">
         <label htmlFor="name">Name</label>
         &nbsp;
         <input 
         id="name" 
         htmlFor="name"
         type="text"
         name="name"
         value={formData.name}
         required
         onChange={handleChange}
         />
      </div>
      <br/>
      <div className="mod">
         <label htmlFor="rollno">Roll Number</label>
         &nbsp;
         <input 
         id="rollno" 
         htmlFor="rollno"
         type="text"
         name="rollno"
         value={formData.rollno}
         required
         onChange={handleChange}
         />
      </div>
      <br/>

      <div className="mod">
         <label htmlFor="class">Class</label>
         &nbsp;
         <input 
         id="class" 
         htmlFor="class"
         type="text"
         name="class"
         value={formData.class}
         onChange={handleChange}
         required
         />
      </div>
      <br/>
      <div className="mod">
         <label htmlFor="section">Section</label>
         &nbsp;
         <input 
         id="section" 
         htmlFor="section"
         type="text"
         name="section"
         value={formData.section}
         onChange={handleChange}
         required
         />
      </div>
      <br/>
      <div className="mod">
         <label htmlFor="name">Blood Group</label>
         &nbsp;
         <input 
         id="bloodgroup" 
         htmlFor="bloodgroup"
         type="text"
         name="bloodgroup"
         value={formData.bloodgroup}
         onChange={handleChange}
         required
         />
      </div>
      <br/>
      <div className="mod">
         <label htmlFor="dob">DOB </label>
         &nbsp;
         <input 
         id="dob" 
         htmlFor="dob"
         type="text"
         name="dob"
         value={formData.dob}
         onChange={handleChange}
         required
         />
      </div>
      <br/>
      
      <br/>
      <button className="btn btn-danger" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default EditPage