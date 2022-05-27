import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Secondpage() {
    const data = {
        Firstname: "",
        Lastname: "",
        Number: "",
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
        const numberregex = /^[0-9\b]+$/;
       

        // first name
        if (!val.Firstname) {
            err.Firstname = "First name is required"
        }

        else if (val.Firstname.length < 3 || val.Firstname.length > 10) {
            err.Firstname = "please write name greater then 3  less then 7 words"
        }
        else if (numberregex.test(val.Firstname)) {
            err.Firstname = "values is always character"
        }
        // else if (!isNaN(val.Firstname)) {
        //     err.Firstname = "values is always character"
        // }

        //last name
        if (!val.Lastname) {
            err.Lastname = "Last name is required"
        }
        else if (val.Lastname.length < 3 || val.Lastname.length > 10) {
            err.Lastname = "please write name greater then 3  less then 7 words"
        }
        else if (numberregex.test(val.Firstname)) {
            err.Firstname = "values is always character"
        }
        else if (!isNaN(val.Lastname)) {
            err.Lastname = "values is always character"
        }
//number

        if (!val.Number) {
            err.Number = "Number is required"
        }
        else if (val.Number.length >= 11) {
            err.Number = "phone is greater then 10"
        }
        else if (!numberregex.test(val.Number)) {
            err.Number = "only number required"
        }
        // if (!val.gender.checked) {
        //     err.gender = "select one value please"

        // }



        return err


    } console.log(error, "errr")


    console.log("this ",loginData)
    const users = async () =>{
        const result =  await axios.post("http://localhost:3008/data",loginData)
        console.log("data is ",result.data)
    }

    const Navigate=useNavigate();
  
    useEffect(() => {
        if (Object.keys(error).length === 0 && submit) {
            console.log("hello")
            users();
            Navigate("/thirdpage")
        }

    }, [error])
    console.log(loginData.gender, "gender")
    console.log(error.gender, "gender")
    return (
        <div className='second_page'>
            <form action="" className='second_form' onSubmit={formsubmitted} >
                <div><label htmlFor="" className='f_name'>First Name</label> <br />
                    <input type="text" id='f_name' placeholder='First Name' name='Firstname' value={loginData.Firstname} onChange={handleChange} /></div>
                <p className='error_firstname'>{error.Firstname}</p>

                <div><label htmlFor="" className='l_name'>Last Name</label> <br />
                    <input type="text" id='l_name' placeholder='Last Name' name='Lastname' value={loginData.Lastname} onChange={handleChange} /></div>
                <p className='error_lastname'>{error.Lastname}</p>

                <div className='Gender'>
                    <label htmlFor="" className='gender'>Gender</label>
                    <br />
                    <div className='button_radio'>
                        <input type="radio" id="male" checked={loginData.gender == "male"} name="gender" value="male" onClick={handleChange} required />
                        <label for="male">male</label>
                        <input type="radio" id="female" checked={loginData.gender == "female"} name="gender" value="female" onClick={handleChange} required />
                        <label for="css">female</label>

                    </div>
                </div>
                {/* <p className='error_email'>{error.gender}</p> */}



                <div><label htmlFor="" className='phone'>Phone</label>
                    <input type="text" id='phone' placeholder='Phone' name='Number' value={loginData.Number} onChange={handleChange} /></div>
                <p className='error_number'>{error.Number}</p>


                {/* hobbies */}
                <div className='hobbbies'><label htmlFor="">Hobbies</label>
                    <div id='hobbies'>
                        <div>
                            <input type="checkbox" id="cric" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Playing Cricket</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cric" name="vehicle1" value="Bike" />
                            <label for="vehicle1"> Cylcing</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cric" name="vehicle1" value="Bike" />
                            <label for="vehicle1"> Book Reading</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cric" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Gaming</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cric" name="vehicle1" value="Bike" />
                            <label for="vehicle1">Talking</label>
                        </div>
                    </div>
                </div>
              <button className='btn_second'>Next</button>
            </form>
        </div>
    )
}
