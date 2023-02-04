import React from 'react'
import CompLogin from '../components/CompLogin'
import CompLogout2 from '../components/CompLogout2'
import CompProfile from '../components/CompProfile'

function Login() {
  return (
    <>
    <h1 className='text-blue p-4'>Hola</h1>
    <CompLogin />
    <CompProfile />
    <CompLogout2 />
    </>
  )
}

export default Login