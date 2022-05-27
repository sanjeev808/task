

import React, { useState } from 'react'

export default function Review() {
    const [isActiveLoginData, setisActiveLoginData] = useState(false);
    const [userDeatil,setUserDetail] = useState(false)
    const [qulificationDetail,setQulificationDetail] = useState(false);


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
                  <p>Email : Mauryasanjeev808@gmail.com</p>
                  <p>Passwords : Sanjeev123@.</p>
                  <p>confirm Password : Sanjeev123@.</p>
                  </div>}

                    {/* ALl user detail present here  */}
                    <div className="accordion-title" onClick={() => setUserDetail(!userDeatil)}>
                    <div className='data'>
                        <div className='accordin_heading'>User Detail</div>
                        <div>{userDeatil ? '-' : '+'}</div>
                    </div>
                </div>
                {userDeatil && <div className="accordion-content-user">
                   <p>First Name : Sanjeev Maurya </p> 
                   <p>Last Name : Maurya</p>
                   <p>Number : 7009711037</p>
                   <p>Gender</p>
                   </div>}

                {/*all Qualification detail prsent here*/}
                    <div className="accordion-title" onClick={() => setQulificationDetail(!qulificationDetail)}>
                    <div className='data'>
                        <div className='accordin_heading'>Qualification Detail</div>
                        <div>{qulificationDetail ? '-' : '+'}</div>
                    </div>
                </div>
                {qulificationDetail && <div className="accordion-content">
                 <p>HighSchool percent : 100</p>
                 <p>Senior Secondary percent : 100</p>
                
                 <p>Graduation : 32</p>

                 </div>}

            </div>
        </div>

    )
}

