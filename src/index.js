import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Auth0Provider
      domain="dev-3ghx1nei4t5xyefo.us.auth0.com"
      clientId="0fud6j3c3I3odMWVjaoNbct2vPrjKfYg"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </>
);
