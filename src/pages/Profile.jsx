import React from 'react'
import CompLogout from '../components/CompLogout'
import CompProfile from '../components/CompProfile'
import Navbar from '../layout/Navbar'

const Profile = () => {
  return (
    <div >
      <h1 className='text-blue text-xs bg-slate-500'>hola</h1>
      Profile
      <CompProfile /> 
      <CompLogout />
     
      <Navbar/>
    </div>
  )
}

export default Profile