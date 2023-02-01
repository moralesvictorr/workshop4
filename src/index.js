import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import CompLogin from './components/CompLogin';
import CompProfile from './components/CompProfile';
import CompLogout from './components/CompLogout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Auth0Provider domain= 'dev-tm2yt3jokd424kus.us.auth0.com' clientId= 'vdYv6TZwbz1YRgmJyMuFPlFyDqQIsmf3'  authorizationParams={{ redirect_uri:window.location.origin }}>
      <App />

    </Auth0Provider>
  </>
);