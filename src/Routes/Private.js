import React from 'react';
import { Route, Routes , Navigate} from 'react-router-dom';
//COMPONENTS 
import Profile from '../Apps/Profile/Components/Profile';


const Private = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/profile-page'/>} />
      <Route path='profile-page' element={<Profile/>} />
    </Routes>
  )
}

export default Private