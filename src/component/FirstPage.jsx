import React, { useState,useEffect } from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';


export default function FirstPage() {


    const data={
        email:"",
        password:"",
        confirmPassword:""
    }
    const[loginData,setLoginData]=useState(data);
    const [PasswordEye, setPasswordEye] = useState(false)
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(false)
    const [error, setError] = useState({});
    const[submit,setSubmit]=useState(false)
    const handlePasswordClick = () => {
        setPasswordEye(!PasswordEye)
    }
    
    const confirmHandlePasswordClick = () => {
        setConfirmPasswordEye(!confirmPasswordEye)
    }
    const formsubmitted = (e) => {
        e.preventDefault();
  
        console.log(e.target.value);
       
        setError(validation(loginData))
        setSubmit(true)
    }

function handleChange(e){
    const{name,value}=e.target
setLoginData({...loginData,[name]:value})
}
    function validation(val){
        const err={};
        const emailRegex = /\S+@\S+\.\S+/;
        // const passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;

        const uppercaseRegExp   = /(?=.*?[A-Z])/;
        const lowercaseRegExp   = /(?=.*?[a-z])/;
        const digitsRegExp      = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp   = /.{8,}/;
        if(!val.email){
            err.email="email is required"
        }
        if (!emailRegex.test(val.email)){
            err.email = "plase enter ur valid email"
        }
        if(val.password === ""){
            err.password="pass is required"
        }
       else if(!uppercaseRegExp.test(val.password))
        {
          err.password= "pls enter atleast one capital letter"
        }
      else  if(!lowercaseRegExp.test(val.password))
        {
          err.password= "pls enter atleast one lower letter"
        }
        else if(!digitsRegExp.test(val.password))
        {
          err.password= "pls enter atleast some digit"
        }

        else  if(!specialCharRegExp.test(val.password))
        {
          err.password= "pls enter atleast spical character"
        }
       
        // if(val.password==passwordregex){
        //  err.password="wrong"
        //  }
     
        if(val.password.length>14){
            err.password="exceed"
        }
      //   if(!val.confirmPassword){
      //     err.confirmPassword="pass is required"data
      // }
      // if(val.password==val.confirmPassword)
      // {
      //   err.confirmPassword = "password  match"
      // }  
      return err

    }
    const Navigate=useNavigate();
  
useEffect(()=>{
  if(Object.keys(error).length==0 &&submit){
console.log("hello")
Navigate("/secondpage")
}

},[error])
    console.log(error,"errr")
    return (
        <div className='first_page'>
            <form action="" className='form' onSubmit={formsubmitted} >
                <div className='email'>
                    <label htmlFor="Email">Email <span>*</span></label>
                    <input type="email" placeholder='Enter Your Email' id='email' name="email" value={loginData.email} onChange={handleChange} />
                    <p className='error_email'>{error.email}</p>
                </div>
                <div className='confirm_password p-relative'>
                <label htmlFor="Email" className='password'>Password <span>*</span></label>
                    <input type={(PasswordEye === false) ? "password" : "text"} placeholder='Enter  
                    your Password' id='password' name="password" value={loginData.password} onChange={handleChange} />
                    <div className='p-absolute icons' >
                        {/* {
                            (PasswordEye === false) ? <VisibilityIcon className='icons' onClick={handlePasswordClick} /> : <VisibilityOffIcon className='ic' onClick={handlePasswordClick} />
                        } */}


                    </div><p className='error_password'> {error.password}</p>
                </div>

                <div className='confirm p-relative'>
                <label htmlFor="Email" className='confirm'>Confirm Password  <span>*</span></label>
                    <input type={(confirmPasswordEye === false) ? "password" : "text"} placeholder='Confirm Password' id='password' onChange={handleChange}
                      />
                    <div className='p-absolute icons' >
                        {/* {
                            (confirmPasswordEye === false) ? <VisibilityIcon onClick={confirmHandlePasswordClick} /> : <VisibilityOffIcon onClick={confirmHandlePasswordClick} />
                        } */}


                    </div>

                </div>
                <p className='error_confirm'> {error.confirmPassword}</p>
              <div className='btn-next' type="submit">
             <button type="submit">Next</button>
                </div>
            </form>
        </div>
    )
}





