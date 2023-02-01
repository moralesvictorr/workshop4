import React from 'react'
import CompLogin from '../components/CompLogin'
import CompLogout from '../components/CompLogout'
import CompProfile from '../components/CompProfile'

function Login() {
  return (
    <>
    <h1>Hola</h1>
    <CompLogin />
    <CompProfile />
    <CompLogout />
    </>
  )
}

export default Login