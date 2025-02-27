import React, { useState } from 'react';  // Import useState
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  // Import necessary components
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import './index.css';

import Admin1 from './Component/Admin1';
import Users from './Component/User';
import UserDet from './Component/UserDetail';
import AuthProvider from './Component/Auth';
import Profile from './Component/Profile';
import Login1 from './Component/Login1';
import ReqAuth from './Component/ReqAuth'; 





import Signup from './Component/Signup';

import Status from './Component/Status';
import Mobilespage from './Component/Mobilespage';
import Bookapp from './Component/Bookapp';
import Doctors from './Component/Doctors';
import DoctorDetails from './Component/DoctorDetails';

const LazyAbout = React.lazy(() => import('./Component/About'));

export default function App() {
  // Authentication state managed in App.js
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login function to simulate login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthProvider>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/" element={<Navigate to="/doctors/All" />} />
          {/* Lazy load About component */}
          <Route path='/about' element={
            <React.Suspense fallback='Loading ...'>
              <LazyAbout />
            </React.Suspense>
          } />

          {/* Doctor and Admin Routes */}
          <Route path="/" element={<Navigate to="/doctors/All" />} />
      <Route path="/doctors/:specialization?" element={<DoctorDetails />} />
      <Route path="/book/:doctorId" element={<Bookapp />} />
      
          <Route path='/Admin1' element={<Admin1 />} />
          <Route path='/mobile/:pid' element={<Mobilespage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/bookapp' element={<Bookapp />} />

<Route path='/status' element={<Status/>}/>
        
<Route path='/doctors' element={<Doctors />}/>
          {/* Users and Profile Routes */}
          <Route path='/users' element={<Users />}>
            <Route path=':userId' element={<UserDet />} />
          </Route>
          <Route path='/profile' element={
            <ReqAuth>
              <Profile />
            </ReqAuth>
          } />
          
          {/* Login Route */}
          <Route path='/login' element={<Login1 />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
