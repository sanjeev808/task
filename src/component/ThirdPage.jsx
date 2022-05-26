import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Secondpage() {
 
  const data = {
    matrix: "",
    high: "",
    graduation: "",
    gender: " "
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
    // const nregex=/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/
    const matrixregex = /^[0-9\b]+$/;
    // const validGender=/^[0-9]+Yrs)\s*([0-9]Mths|)\s([0-9]Days|)(\/|)(M|F|)+$/

    if (!val.matrix) {
      err.matrix = "Number is required";
    }
    else if (val.matrix.length >3) {
      err.matrix = "10th percentage never greater then 3 numbers ";
    }
    else if (!matrixregex.test(val.matrix)) {
      err.matrix = "only number required";
    }

    if (!val.high) {
      err.high = "Number is required";
    }
    else if (val.high.length >3) {
      err.high = "10th percentage never greater then 3 numbers ";
    }
    else if (!matrixregex.test(val.high)) {
      err.high = "only number required";
    }

    if (!val.graduation) {
      err.graduation = "Number is required";
    }
    else if (val.graduation.length >3) {
      err.graduation = "10th percentage never greater then 3 numbers ";
    }
    else if (!matrixregex.test(val.graduation)) {
      err.graduation = "only number required";
    }




    return err


  } console.log(error, "errr")
  const Navigate=useNavigate();

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
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
          <input type="text" id='phone' placeholder='Percentage' name='matrix' value={loginData.matrix} onChange={handleChange} /></div>
        <p className='error_email'>{error.matrix}</p>

        <div className='hobbbies'><label htmlFor="">Subject</label>
          <div id='hobbies'>
            <div>
              <input type="checkbox" id="cric" name="matrix_subject" value={loginData.matrix_subject} />
              <label for="vehicle1">Hindi</label>
            </div>
            <div>
              <input type="checkbox" id="cric" name="matrix_subject" value={loginData.matrix_subject}  />
              <label for="subject"> English</label>
            </div>
            <div>
              <input type="checkbox" id="cric" name="matrix_subject" value={loginData.matrix_subject}  />
              <label for="subject">Science</label>
            </div>
            <div>
              <input type="checkbox" id="cric" name="matrix_subject" value={loginData.matrix_subject}  />
              <label for="subject">Math</label>
            </div>
            <div>
              <input type="checkbox" id="cric" name="matrix_subject" value={loginData.matrix_subject} />
              <label for="subject">Social Science</label>
            </div>
          </div>
        </div>
        <div><label htmlFor="" className='high'>12th</label>
          <input type="text" id='phone' placeholder='Percentage' name='high' value={loginData.high} onChange={handleChange} /></div>
        <p className='error_email'>{error.high}</p>

        <div className='hobbbies'><label htmlFor="">Cousre</label>
          <div id='hobbies'>
            <div>
              <input type="radio" id="cric" name="high_cousre" value={loginData.high_cousre}  />
              <label for="vehicle1">Non-medical</label>
            </div>
            <div>
              <input type="radio" id="cric" name="high_cousre" value={loginData.high_cousre}  />
              <label for="vehicle1"> Commerce</label>
            </div>
            <div>
              <input type="radio" id="cric" name="high_cousre" value={loginData.high_cousre}  />
              <label for="vehicle1">Medical</label>
            </div>
            <div>
              <input type="radio" id="cric" name="high_cousre" value={loginData.high_cousre}  />
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
              <input type="radio" id="cric" name="graduation_course" value={loginData.graduation_course}/>
              <label for="vehicle1">B.tech</label>
            </div>
            <div>
              <input type="radio" id="cric" name="graduation_course" value={loginData.graduation_course} />
              <label for="vehicle1"> BCA</label>
            </div>
            <div>
              <input type="radio" id="cric" name="graduation_course" value={loginData.graduation_course}/>
              <label for="vehicle1">BBA</label>
            </div>
            <div>
              <input type="radio" id="cric" name="graduation_course" value={loginData.graduation_course} />
              <label for="vehicle1">BSC</label>
            </div>
            <div>
              <input type="radio" id="cric" name="graduation_course" value={loginData.graduation_course} />
              <label for="vehicle1">BA</label>
            </div>
          </div>
        </div>
        <button className='btn_second'>Next</button>
      </form>
    </div>
  )
}
