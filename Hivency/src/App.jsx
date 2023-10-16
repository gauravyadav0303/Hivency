import React, { useEffect } from "react";
import HomeOne from "./pages/Homes/HomeOne";
import {Routes, Route } from 'react-router-dom';
import HomeTwo from "./pages/Homes/HomeTwo";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import BlogPage from "./pages/BlogPage/BlogPage"
import BlogPageTwo from "./pages/BlogPage/BlogPageTwo";
import UserExperience from "./pages/UserExperience/UserExperience";
import ServicePage from "./pages/ServicePage/ServicePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import TeamPage from "./pages/TeamPage/TeamPage";


function App() {

 

  return (
  
      <Routes>
        <Route path="/" element={<HomeOne/>} />
        <Route path="/home" element={<HomeTwo/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/project-details" element={<ProjectDetails/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/blog-details" element={<BlogPageTwo/>} />
        <Route path="/user-experience" element={<UserExperience/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/team" element={<TeamPage/>} />
        </Routes>

  )
}

export default App
