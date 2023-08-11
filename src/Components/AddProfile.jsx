import { useState } from "react"
import {createprofile} from "../CrudOperation"
 import "./Add.css"
function AddProfile() {
    const initialProfile ={
      name:'',
      rollno:'',
      class:'',
      section:'',
      bloodgroup:"",
      dob:"",
      image:''
    }
   const [formData,setFormData] =useState(initialProfile);
   const handleChange=(e) =>{
    const{name,value}=e.target;
    setFormData((preData)=>({
      ...preData,
      [name]:value,
    }
    ))};
    const handleSubmit=(e)=>{
        e.preventDefault();
        createprofile(formData);
        setFormData(initialProfile)
    }
  return (
   <div className="container" id="ctn">
       <div className="card" id="srd">
         <div className="card-title" id="tt">
           <h1> Add students Details </h1>
         </div>
      
    <form className="card-body">
      <div className="mod">
         <label htmlFor="name"></label>
         &nbsp;
         
         <input 
         id="name" 
         htmlFor="name"
         type="text"
         name="name"
         value={formData.name}
         required
         onChange={handleChange}
         placeholder="Name"
         />
      </div>
      <br/>
      <div className="mod">
         <label htmlFor="rollno"></label>
         &nbsp;
         <input 
         id="rollno" 
         htmlFor="rollno"
         type="text"
         name="rollno"
         value={formData.rollno}
         required
         onChange={handleChange}
         placeholder="Roll number"

         />
      </div>
      <br/>

      <div className="mod">
         <label htmlFor="class"></label>
         &nbsp;
         <input 
         id="class" 
         htmlFor="class"
         type="text"
         name="class"
         value={formData.class}
         onChange={handleChange}
         required
         placeholder="Class"
         />
      </div>
      <br/>
      <div className="mod">
         <label htmlFor="section"></label>
         &nbsp;
         <input 
         id="section" 
         htmlFor="section"
         type="text"
         name="section"
         value={formData.section}
         onChange={handleChange}
         required
         placeholder="Section"
         />
      </div>
      <br/>
      <div className="mod">
         <label htmlFor="name"></label>
         &nbsp;
         <input 
         id="bloodgroup" 
         htmlFor="bloodgroup"
         type="text"
         name="bloodgroup"
         value={formData.bloodgroup}
         onChange={handleChange}
         required
         placeholder="Blood Group"
         />
      </div>
      <br/>
      <div className="mod">
         <label htmlFor="dob"></label>
         &nbsp;
         <input 
         id="dob" 
         htmlFor="dob"
         type="text"
         name="dob"
         value={formData.dob}
         onChange={handleChange}
         required
         placeholder="DOB"
         />
      </div>
      <br/>
     
      <br/>
      <button className="btn btn-outline-dark" type="submit" onClick={handleSubmit} id="addsubmit">Submit</button>
    </form>
    </div>
   </div>
  )

}
export default AddProfile 