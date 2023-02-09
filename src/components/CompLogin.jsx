import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const CompLogin = () => {
  const {loginWithRedirect} = useAuth0(); 
  return(
    <div>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
    )
  // ) document.addEventListener('DOMContentLoaded', loginWithRedirect() )

}

export default CompLogin