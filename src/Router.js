import React from "react";
import {createBrowserRouter,createRoutesFromElements,BrowserRouter,Routes,Route,Navigate,} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
import Questionary from "./pages/Questionary";
// add
import { useAuth0 } from "@auth0/auth0-react";

const {loginWithRedirect} = useAuth0(); 

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
                {/* add         */}
				<Route path="/" component={loginWithRedirect()} />
                
				<Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/statistics" element={<Statistics />} />
				<Route path="/profile" element={<Profile />} />
                <Route path="/HTML" element={<Questionary />} />
                <Route path="/CSS" element={<Questionary />} />
                <Route path="/JS" element={<Questionary />} />
                <Route path="/FIGMA" element={<Questionary />} />
                <Route path="/UX" element={<Questionary />} />
                {/* <Route path="*" element={<Home />} /> */}

		</>
	)
)
