import React,{useState , useEffect} from 'react'

export default function Fourthpage() {
    const initialvalues = {
        email :"",
        password :""
    }
    const [formValues, seformValues] = useState(initialvalues);
const [ error , setError] =  useState({})
const [isSubmit, setIsSubmit] = useState(false)
    const handlechange = (e)=>{
        console.log(e.target);
        const {name, value} =e.target;
        seformValues({...formValues, [name]:value})
        console.log(formValues)
    }
    const handlesubmit =(e)=>{
        e.preventDefault();
        setError(validate(formValues))
        setIsSubmit(true)
    }
    useEffect (() =>{
        console.log(error)
        if(Object.keys(error).length === 0 && isSubmit)
        console.log(formValues)
    }, formValues)
    const validate =(value)=>{
        const errors = {};
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i

        if(!value.email){
            error.email = "email is required"
        }else if (!regex.test(value.email)){
            error.email = "this  is not a valid email"
        }
        if(!value.password){
            error.password = "password is required"
        }
        else if (value.password.length <4)
        {
            error.password = "password is more  then 4"
        }
        else if (value.password.length> 12)
        {
            error.password = "password  cannot exceed more than 10 "        }
        return error
    }
   return (
    <div className='container'>
<pre>{JSON.stringify(formValues, undefined, 2)}</pre>
<form action="" onSubmit={handlesubmit}>
 <div className='field'>
     <label htmlFor="">Email</label>
     <input type="email" name='email' placeholder='email'value={formValues.email} onChange={handlechange} />
     </div>   
     <p>{error.email}</p>
     <div className='field'>
     <label htmlFor="">Password</label>
     <input type="password" name='password' placeholder='password'  value={formValues.password} onChange={handlechange}/>
     </div>  
     <p>{error.password}</p>
     <button className='btn'>submit</button> 
    </form>    </div>
  )
}
