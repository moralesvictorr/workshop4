import React from 'react'
import {createBrowserRouter,createRoutesFromElements, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
import Navbar from "./layout/Navbar";
import QuestionCSS from './components/QuestionCSS';
import QuestionFIGMA from './components/QuestionFIGMA';
import QuestionHTML from './components/QuestionHTML';
import QuestionJS from './components/QuestionJS';
import QuestionUX from './components/QuestionUX';


export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Navbar />} >

				<Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/statistics" element={<Statistics />} />
				<Route path="/profile" element={<Profile />} />
                <Route path="/questionHTML" element={<QuestionHTML />} />
                <Route path="/questionCSS" element={<QuestionCSS />} />
                <Route path="/questionJS" element={<QuestionJS />} />
                <Route path="/questionFIGMA" element={<QuestionFIGMA />} />
                <Route path="/questionUX" element={<QuestionUX />} />

			</Route>
		</>
	)
)