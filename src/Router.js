import React from "react";
import {createBrowserRouter,createRoutesFromElements,BrowserRouter,Routes,Route,Navigate,} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
import Questionary from "./pages/Questionary";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
				
				<Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/statistics" element={<Statistics />} />
				<Route path="/profile" element={<Profile />} />
                <Route path="/questionHTML" element={<Questionary />} />
                <Route path="/questionCSS" element={<Questionary />} />
                <Route path="/questionJS" element={<Questionary />} />
                <Route path="/questionFIGMA" element={<Questionary />} />
                <Route path="/questionUX" element={<Questionary />} />
                <Route path="*" element={<Profile />} />

		</>
	)
)
