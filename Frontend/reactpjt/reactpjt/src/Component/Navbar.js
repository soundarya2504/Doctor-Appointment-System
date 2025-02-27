
import React from 'react'
import {NavLink} from 'react-router-dom'
import {useAuth } from './Auth'
export default function Navbar() {
const auth=useAuth()
return(
<nav class='primary-nav'>
<NavLink to='/'>Home</NavLink>
<NavLink to='/about'>About us</NavLink>
<NavLink to='/status'>Status</NavLink>
<NavLink to='/profile'>Profile</NavLink>
<NavLink to='/signup'>Signup</NavLink>


<NavLink to='/admin1'>Admin</NavLink>
<NavLink to='/doctors' >Doctors</NavLink>
        
        
{!auth.user && <NavLink to='/login'>Login</NavLink>}
</nav>
)
}