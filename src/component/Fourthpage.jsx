import React from 'react'

export default function Fourthpage() {
  return (
    <div className='second_page flex-direction'>
        <div><h3>Documentation</h3></div>
        <div>
            <h4>Upload Picture</h4>
            <input type="file" name="picture" id="picture" accept=' .jpeg, .png , .jpg' />
        </div>
        <div>
            <h4>10th</h4>
            <p>Marksheet</p>
            <input type="file" name="matrix" id="matrix" accept='.pdf' />
        </div>
        <div>
            <h4>12th</h4>
            <p>Marksheet</p>
            <input type="file" name="high" id="high" accept='.pdf' />
        </div>
        <div>
            <h4>Graduation</h4>
            <p>Marksheet</p>
            <input type="file" name="Graduation" id="Graduation" accept='.pdf' />
        </div>
       
        <button className='btn_second'>submit</button>
        </div>
  )
}
