import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const CompLogin = () => {
  const {loginWithRedirect} = useAuth0(); 
  return(
    document.addEventListener('DOMContentLoaded', loginWithRedirect() )
    // loginWithRedirect()
    // <div>
    //   <button onClick={() => loginWithRedirect()}>Login</button>
    // </div>
    )

}

export default CompLogin