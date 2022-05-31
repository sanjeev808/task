import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Fourthpage() {

    const data = {
        picture:"",
        seniorSecondary: "",
        seniorSecondary_cousre: "",
        graduation: "",
        graduation_course: ""
    
      }
      const [loginData, setLoginData] = useState(data);
      const [error, setError] = useState({});
      const [submit, setSubmit] = useState(false);
      const [file, setFile] = useState();


      const formsubmitted = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setError(validation(loginData))
        setSubmit(true)
      }
      function handleChange(e) {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
        setFile(URL.createObjectURL(e.target.files[0]));
      }
      function validation(val) {
        const err = {};

    
        return err
    
    
      } console.log(error, "errr")
    

      console.log("this ", loginData)
  // const education = async () => {
  //   const result = await axios.post("http://localhost:3008/educations", loginData)
  //   console.log("data is ", result.data)
  // }
    
  const Navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      // education();
      console.log("hello")
      Navigate("/review")
    }

  }, [error])

  return (
    <div className='second_page flex-direction'>
        <div><h3>Documentation</h3></div>
        <form action="" onSubmit={formsubmitted} >

        <div className="App">
            <h2>Add Image:</h2>
            <input type="file" id='imge_file' onChange={handleChange} required  />
            <img src={file} className="preview_img" />
            </div>
        <div>
            <h4>10th</h4>
            <p>Marksheet</p>
            <input type="file" name="matrix" id="matrix" accept='.pdf'  required/>
        </div>
        <div>
            <h4>12th</h4>
            <p>Marksheet</p>
            <input type="file" name="high" id="high" accept='.pdf' required />
        </div>
        <div>
            <h4>Graduation</h4>
            <p>Marksheet</p>
            <input type="file" name="Graduation" id="Graduation" accept='.pdf'  />
        </div>
       
        <button className='btn_second'>submit</button>
        </form>
        </div>
  )
}
