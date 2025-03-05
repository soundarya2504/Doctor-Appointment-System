import React,{useState} from 'react'
import axios from 'axios'
import{useNavigate} from'react-router-dom'
export default function Signup() {
    const navigate=useNavigate()
    const[message,setMessage]=useState('')
    const[formdata,setFormData]=useState({
        username:'',
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        setFormData({...formdata,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formdata);
        axios.post(`http://localhost:3006/Signup/signup`,formdata)
        .then((res)=>{
            setMessage('Signup Successful Redirecting to Login Page...')
            setTimeout(() => {
                navigate('/login')             
            },3000);
    })
  }
  return (
    <div className='formcont'>
        <br></br>
        <form onSubmit={handleSubmit}>
            <label>Username</label><br></br>
            <input type='text' name='username' value={formdata.username} onChange={handleChange}/><br></br>
            <label>Email</label><br></br>
            <input type='email' name='email' value={formdata.email} onChange={handleChange}/><br></br>
            <label>Password</label><br></br>
            <input type='password' name='password' value={formdata.password} onChange={handleChange}/><br></br>
            <button type='submit'>Sign Up</button>
        </form>
        {message}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}

