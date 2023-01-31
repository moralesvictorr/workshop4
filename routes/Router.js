import React, { Component } from 'react'
import {Home,Login,Profile,Statistics} from "./pages";
import {Navbar} from "./layout";
import {QuestionCSS,QuestionFIGMA,QUESTIONHTML,QuestionJS,QuestionUX} from "./components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Navbar />} >

				<Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/statistics" element={<Statistics />} />
				<Route path="/profile" element={<Profile />} />
                <Route path="/questionHTML" element={<QUESTIONHTML />} />
                <Route path="/questionCSS" element={<QuestionCSS />} />
                <Route path="/questionFIGMA" element={<QuestionFIGMA />} />
                <Route path="/questionJS" element={<QuestionJS />} />
                <Route path="/questionUX" element={<QuestionUX />} />

			</Route>
		</>
	)
)