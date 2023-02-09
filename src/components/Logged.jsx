import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Logged = ({ children, ...rest }) => {
    const navigate = useNavigate();
    const { isAuthenticated, loading } = useAuth0();    
  useEffect(() => {
    if (loading) {
      return;
    }
  }, [loading]);

  if (!isAuthenticated) {      
        navigate('/login');
    } else {
        navigate('/home');
    }
//   return ();
};

export default Logged;
