import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Secondpage() {
    return (
        <div className='second_page'>
            <form action="" className='second_form'>
                <div><label htmlFor="" className='f_name'>First Name</label> <br />
                    <input type="text" id='f_name' placeholder='First Name' /></div>

                <div><label htmlFor="" className='l_name'>Last Name</label> <br />
                    <input type="text" id='l_name' placeholder='Last Name' /></div>


                <div className='Gender'>
                    <label htmlFor="" className='gender'>Gender</label>
                    <br />
                    <div className='button_radio'>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="male">male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label for="css">female</label>
                    <input type="radio" id="other" name="gender" value="other" />
                    <label for="javascript">Other</label>
                    </div>
                </div>


                <div><label htmlFor="" className='phone'>Phone</label>
                    <input type="number" id='phone' placeholder='Phone' /></div>


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
               <NavLink to='/thirdpage'> <button className='btn_second'>Next</button></NavLink>
            </form>
        </div>
    )
}
