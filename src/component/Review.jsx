
import React, { useState } from 'react'
import axios from 'axios';

export default function Review() {
    const [isActiveLoginData, setisActiveLoginData] = useState(false);
    const [userDeatil, setUserDetail] = useState(false)
    const [qulificationDetail, setQulificationDetail] = useState(false);


    
    let logindetail = JSON.parse(localStorage.getItem('loginData'))
    let userData = JSON.parse(localStorage.getItem('user_info'))
    let educationDetails = JSON.parse(localStorage.getItem('Education_info'))
   
    const loginUser = async () =>{
        const result =  await axios.post("http://localhost:3008/members",logindetail)
        console.log("data is ",result.data)
    }
    const usersdDetail = async () =>{
        const result =  await axios.post("http://localhost:3008/data",userData)
        console.log("data is ",result.data)
    }
    const education = async () => {
        const result = await axios.post("http://localhost:3008/educations", educationDetails)
        console.log("data is ", result.data)
      }

  const dataFound = () =>{
      console.log("data found")
      loginUser()
      usersdDetail()
      education()
      localStorage.clear();
  }
 


    return (
        <div>

            <div className="accordin_page">

                {/* Login id and passwords are here  */}
                <div className="accordion-title" onClick={() => setisActiveLoginData(!isActiveLoginData)}>
                    <div className='data'>
                        <div className='accordin_heading'>Login data</div>
                        <div>{isActiveLoginData ? '-' : '+'}</div>
                    </div>
                </div>
                {isActiveLoginData && <div className="accordion-content-login">
                    {

                        Object.entries(logindetail).map((ele, val) => {
                            console.log(`${ele[0]} : ${ele[1]})`)
                            return (
                                <p>{`${ele[0]} : ${ele[1]}`} </p>
                            )
                        })
                    }

                </div>}

                {/* ALl user detail present here  */}
                <div className="accordion-title" onClick={() => setUserDetail(!userDeatil)}>
                    <div className='data'>
                        <div className='accordin_heading'>User Detail</div>
                        <div>{userDeatil ? '-' : '+'}</div>
                    </div>
                </div>
                {userDeatil && <div className="accordion-content-user">
                    {

                        Object.entries(userData).map((ele, val) => {
                            console.log(`${ele[0]} : ${ele[1]})`)
                            return (
                                <p>{`${ele[0]} : ${ele[1]}`} </p>
                            )
                        })
                    }
                </div>}

                {/*all Qualification detail prsent here*/}
                <div className="accordion-title" onClick={() => setQulificationDetail(!qulificationDetail)}>
                    <div className='data'>
                        <div className='accordin_heading'>Qualification Detail</div>
                        <div>{qulificationDetail ? '-' : '+'}</div>
                    </div>
                </div>
                {qulificationDetail && <div className="accordion-content">
                    {

                        Object.entries(educationDetails).map((ele, val) => {
                            console.log(`${ele[0]} : ${ele[1]})`)
                            return (
                                <p>{`${ele[0]} : ${ele[1]}`} </p>
                            )
                        })
                    }

                </div>}
                    <button type='submit' onClick={()=>{dataFound()}}>Submit</button>
            </div>
        </div>

    )
}

