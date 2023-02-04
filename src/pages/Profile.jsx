import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import CompLogout2 from '../components/CompLogout2'
import CompProfile from '../components/CompProfile'
import Navbar from '../layout/Navbar'
import CompLogin from '../components/CompLogin'

export const CompLogout = () => {
  const { logout } = useAuth0()

  return <button onClick={() => logout({returnTo:window.location.origin})}>Logout</button>
}

export const CompProfile2 = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Lodading...</div>;
  }
  return (
    isAuthenticated && (
      <div className="bg-gray-400 flex flex-col ">
        <img src={user.picture} className="" alt={user.name} referrerPolicy="no-referrer"/>
        <h2 className="bg-black">{user.name}</h2>
        <p className="bg-black">Email : {user.email}</p>
        <p className="bg-black">{user.website}</p>
      </div>
    )
  );
};

const Profile = () => {
  return (
    <div >
      <h1 className='text-blue text-xs bg-slate-500'>Perfil</h1>
      
      <CompLogin />
      <CompProfile2 />
      <CompLogout />
     
      <Navbar/>
    </div>
  )
}

export default Profile;