import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const CompLogin = () => {
  const {loginWithRedirect} = useAuth0();
  return (
    
      <button
      className='text-slate-800'
      onClick={() =>{loginWithRedirect()}}>Login</button>
  );
}

export default CompLogin