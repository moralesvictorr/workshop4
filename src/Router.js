import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
// import Navbar from "./layout/Navbar";
// import QuestionCSS from "./components/QuestionCSS";
// import QuestionFIGMA from "./components/QuestionFIGMA";
// import QuestionHTML from "./components/QuestionHTML";
// import QuestionJS from "./components/QuestionJS";
// import QuestionUX from "./components/QuestionUX";
import Questionary from "./pages/Questionary";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/HTML" element={<Questionary />} />
      <Route path="/CSS" element={<Questionary />} />
      <Route path="/JS" element={<Questionary />} />
      <Route path="/FIGMA" element={<Questionary />} />
      <Route path="/UX" element={<Questionary />} />
    </>
  )
);
