
/*import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation here if needed
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Sign-Up Successful");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};


*/
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

