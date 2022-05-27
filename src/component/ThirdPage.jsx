import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Secondpage() {

  const data = {
    highSchool: "",
    seniorSecondary: "",
    seniorSecondary_cousre: "",
    graduation: "",
    graduation_course: ""

  }

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false)

  const formsubmitted = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setError(validation(loginData))
    setSubmit(true)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  function validation(val) {
    const err = {};
    const matrixregex = /^[0-9\b]+$/;
    if (!val.highSchool) {
      err.highSchool = "Number is required";
    }
    else if (val.highSchool.length > 3) {
      err.highSchool = " never greater then 3 numbers ";
    }
    else if (!matrixregex.test(val.highSchool)) {
      err.highSchool = "only number required";
    }

    if (!val.seniorSecondary) {
      err.seniorSecondary = "Number is required";
    }
    else if (val.seniorSecondary.length > 3) {
      err.seniorSecondary = " Never greater then 3 numbers ";
    }
    else if (!matrixregex.test(val.seniorSecondary)) {
      err.seniorSecondary = "only number required";
    }

    if (!val.graduation) {
      err.graduation = "Number is required";
    }
    else if (val.graduation.length > 3) {
      err.graduation = " Never greater then 3 numbers ";
    }
    else if (!matrixregex.test(val.graduation)) {
      err.graduation = "only number required";
    }




    return err


  } console.log(error, "errr")

  console.log("this ", loginData)
  const education = async () => {
    const result = await axios.post("http://localhost:3008/educations", loginData)
    console.log("data is ", result.data)
  }


  const Navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      education();
      console.log("hello")
      Navigate("/fourthpage")
    }

  }, [error])
  console.log(loginData.gender, "gender")
  console.log(error.gender, "gender")
  return (
    <div className='second_page'>
      <form action="" className='second_form' onSubmit={formsubmitted} >

        <div><label htmlFor="" className='phone'>10th</label>
          <input type="text" id='phone' placeholder='Percentage' name='highSchool' value={loginData.highSchool} onChange={handleChange} /></div>
        <p className='error_email'>{error.highSchool}</p>

        <div className='hobbbies'><label htmlFor="">Subject</label>
          <div id='hobbies'>
            <div>
              <input type="checkbox" id="cric" name="highSchool_subject" value={loginData.highSchool_subject} />
              <label for="vehicle1">Hindi</label>
            </div>
            <div>
              <input type="checkbox" id="cric" name="highSchool_subject" value={loginData.highSchool_subject} />
              <label for="subject"> English</label>
            </div>
            <div>
              <input type="checkbox" id="cric" name="highSchool_subject" value={loginData.highSchool_subject} />
              <label for="subject">Science</label>
            </div>
            <div>
              <input type="checkbox" id="cric" name="highSchool_subject" value={loginData.highSchool_subject} />
              <label for="subject">Math</label>
            </div>
            <div>
              <input type="checkbox" id="cric" name="matrix_subject" value={loginData.matrix_subject} />
              <label for="subject">Social Science</label>
            </div>
          </div>
        </div>
        <div><label htmlFor="" className='high'>12th</label>
          <input type="text" id='phone' placeholder='Percentage' name='seniorSecondary' value={loginData.seniorSecondary} onChange={handleChange} /></div>
        <p className='error_email'>{error.seniorSecondary}</p>

        <div className='hobbbies'><label htmlFor="">Cousre</label>
          <div id='hobbies'>
            <div>
              <input type="radio" id="cric" checked={loginData.seniorSecondary_cousre == "Non-medical"} name="seniorSecondary_cousre" value="Non-medical" onClick={handleChange} required />
              <label for="vehicle1">Non-medical</label>
            </div>
            <div>
              <input type="radio" id="cric" checked={loginData.seniorSecondary_cousre == "Commerce"} name="seniorSecondary_cousre" value="Commerce" onClick={handleChange} required />
              <label for="vehicle1"> Commerce</label>
            </div>
            <div>
              <input type="radio" id="cric" checked={loginData.seniorSecondary_cousre == "Medical"} name="seniorSecondary_cousre" value="Medical" onClick={handleChange} required />
              <label for="vehicle1">Medical</label>
            </div>
            <div>
              <input type="radio" id="cric" checked={loginData.seniorSecondary_cousre == "Arts"} name="seniorSecondary_cousre" value="Arts" onClick={handleChange} required />
              <label for="vehicle1">Arts</label>
            </div>
          </div>
        </div>
        <div><label htmlFor="" className='phone'>Graduation</label>
          <input type="text" id='phone' placeholder='Percentage' name='graduation' value={loginData.graduation} onChange={handleChange} /></div>
        <p className='error_email'>{error.graduation}</p>

        <div className='hobbbies'><label htmlFor="">Cousre</label>
          <div id='hobbies'>
            <div>
              <input type="radio" id="cric" checked={loginData.graduation_course == "B.Tech"} name="graduation_course" value="B.Tech" onClick={handleChange} required />
              <label for="vehicle1">B.tech</label>
            </div>
            <div>
              <input type="radio" id="cric" checked={loginData.graduation_course == "BCA"} name="graduation_course" value="BCA" onClick={handleChange} required />
              <label for="vehicle1"> BCA</label>
            </div>
            <div>
              <input type="radio" id="cric" checked={loginData.graduation_course == "BBA"} name="graduation_course" value="BBA" onClick={handleChange} required />
              <label for="vehicle1">BBA</label>
            </div>
            <div>
              <input type="radio" id="cric" checked={loginData.graduation_course == "B.SC"} name="graduation_course" value="B.SC" onClick={handleChange} required />
              <label for="vehicle1">B.SC</label>
            </div>
            <div>
              <input type="radio" id="cric" checked={loginData.graduation_course == "Non-medical"} name="graduation_course" value="BA" onClick={handleChange} required />
              <label for="vehicle1">BA</label>
            </div>
          </div>
        </div>
        <button className='btn_second'>Next</button>
      </form>
    </div>
  )
}
