import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
//COMPONENTS
import Login from '../Apps/Auth/Components/Login';
import Register from '../Apps/Auth/Components/Register';

const Public = () => {
  return (
    
    <Routes>
    <Route path='/' element={<Navigate to='login'/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
    </Routes>
  )
}

export default Public;