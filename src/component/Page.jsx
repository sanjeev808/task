import React, { useState } from 'react';


 export default function Page() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  };

  return (
    <div className="container">


      <div className='email'>
                    <label htmlFor="Email">Email <span>*</span></label>
                    <input type="email" placeholder='Enter Your Email' id='email' name="email" onChange={validateEmail} />
                    <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>
                </div>

      
    </div>
  );
}